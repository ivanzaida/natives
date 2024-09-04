import { log } from "console";
import { mkdir, readdir, readFile, rmdir, writeFile } from "fs/promises";
import path from "path";
import { Node, parseMarkdown } from "../parser/parse-md";
import { camelCase, kebabCase } from "change-case";
import { resolveType, TTypeInfo } from "../store";

class Native {
    public returnType: TTypeInfo;
    public name: string;
    public namespace: string;
    public parameters: { type: TTypeInfo, name: string, isPointer: boolean, defaultValue?: string }[] = [];
    public hash: string;

    public build(): string {

        const imports = this.getImports();

        const buffer: string[] = []

        if (imports.length) {
            buffer.push(...imports);
            buffer.push('');
        }


        this.buildSignature(buffer);

        return buffer.join('\n');
    }

    private getImports(): string[] {
        const types = this.parameters.map(param => param.type).concat(this.returnType);
        const imports = types.filter(type => type.folder)
        const byFolder = new Map<string, string[]>();
        imports.forEach(type => {
            if (!byFolder.has(type.folder!)) {
                byFolder.set(type.folder!, []);
            }
            byFolder.get(type.folder!)?.push(type.name);
        });

        return Array.from(byFolder.entries()).map(([folder, types]) => {
            return `import { ${types.join(', ')} } from '../../${folder}';`;
        });

    }

    private buildSignature(buffer: string[]): void {
        const parameters = this.parameters.map(param => {
            let ret = `${param.name}: ${param.type.name}`;

            if (param.defaultValue) {
                const excl = param.defaultValue === 'null' ? '!': '';
                ret += ` = ${param.defaultValue}${excl}`;
            }

            if (param.isPointer) {
                ret += ` /* Pointer */`;
            }

            return ret;
        }).join(', ');
        const returnType = this.returnType.name;

        buffer.push(`export function ${this.name}(${parameters}): ${returnType} {`)

        const preRun: string[] = [];
        const postRun: string[] = [];

        const params: string[] = [];


        this.parameters.map(param => {
            if (param.isPointer) {
                const dataview = `${param.name}DataView`;
                preRun.push(`\tconst ${dataview} = ${param.type.name}.dataView;`)
                params.push(`${dataview}`)
                postRun.push(`\t${param.name}.read(${dataview});`)
                return;
            }

            return params.push(param.name);
        })

        let realReturnType = returnType;

        if (returnType === 'Vector3') {
            realReturnType = `[number, number, number]`;
            params.push('Citizen.resultAsVector()')
            postRun.push(`\treturn Vector3.fromArray(result);`)
        }

        buffer.push(...preRun);
        buffer.push(`\tconst result = Citizen.invokeNative<${realReturnType}>('${this.hash}', ${params.join(', ')});`)
        buffer.push(...postRun);
        
        if (realReturnType === returnType) {
            buffer.push(`\treturn result;`)
        }


        buffer.push('}')
    }
}

export class FunctionsGenerator {
    private readonly _folder: string;

    constructor(folder: string) {
        this._folder = folder;
    }

    private _natives = new Map<string, Native[]>();

    public async generate() {
        const inFolder = path.join(process.cwd(), `native-db/${this._folder}`);
        const outFolder = path.join(process.cwd(), `generated/${this._folder}`);
        await rmdir(outFolder, { recursive: true }).catch(() => { });
        await mkdir(outFolder).catch(() => { });

        const dir = await readdir(inFolder);
        await Promise.all(dir.map(async file => {
            const native = new Native();

            const fileContent = await readFile(path.join(inFolder, file), 'utf-8');
            const node = parseMarkdown(fileContent);

            this.parseName(node, native);
            this.parseParameters(node, native);
            this.parseHash(node, native);

            if (!this._natives.has(native.namespace)) {
                this._natives.set(native.namespace, []);
            }
            this._natives.get(native.namespace)?.push(native);
        }))

        const folders: string[] = []
        await Promise.all(Array.from(this._natives.entries()).map(async ([namespace, natives]) => {
            const folder =kebabCase(namespace);
            const namespaceFolder = path.join(outFolder, folder);
            await mkdir(namespaceFolder).catch(() => { });
            const fileNames: string[] = [];
            for (const native of natives) {
                const fileName = kebabCase(native.name);
                const file = path.join(namespaceFolder, fileName + '.ts');
                await writeFile(file, native.build());
                fileNames.push(fileName);
            }
            const indexFile = path.join(namespaceFolder, 'index.ts');
            await writeFile(indexFile, fileNames.map(name => `export * from './${name}';`).join('\n'));
            folders.push(folder);
        }));

        const indexFile = path.join(outFolder, 'index.ts');
        await writeFile(indexFile, folders.map(folder => `export * from './${folder}';`).join('\n'));
    }

    private parseName(node: Node, native: Native): void {
        const title = node.children[0].title;
        const [namespace, nativeName] = title.split('::');
        const runtimeName = camelCase(nativeName);
        native.name = runtimeName;
        native.namespace = camelCase(namespace);
    }

    private parseParameters(node: Node, native: Native): void {
        const l = native.name === 'setFacialIdleAnimOverride' ? log : () => { };
        const parameters = (node.findChildByName('Parameters')?.content ?? []).map(data => data.replace('*', '').replace(/\*\*/g, '').trim()).filter(Boolean);
        parameters.forEach(param => {
            let [type, name] = param.split(' ');
            const isPointer = type.endsWith('\*');
            if (isPointer) {
                type = type.replace('\\*', '');
            }

            const defaultValue = param.split('=')[1]?.split(':')[0].trim();
            const runtimeType = resolveType(type);
            native.parameters.push({ type: runtimeType, name, isPointer, defaultValue: defaultValue });
        });

        let returnType = node.findChildByName('Returns')?.content.map(data => data.replace(/\**/g, '').trim()).filter(Boolean);;

        if (!returnType) {
            returnType = ['VOID'];
        }

        native.returnType = resolveType(returnType[0]);
    }

    private parseHash(node: Node, native: Native): void {
        const hashes = node.findChildByName('Hashes');
        if (!hashes) {
            throw new Error(`Hashes not found for native ${native.name}`);
        }
        const [version, hash] = hashes.content[3].split('|').map(data => data.trim()).filter(Boolean);

        if (!hash) {
            throw new Error(`Hash not found for native ${native.name}`);
        }

        native.hash = hash;
    }
}