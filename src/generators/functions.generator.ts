import { log } from "console";
import { mkdir, readdir, readFile, rmdir, writeFile } from "fs/promises";
import path from "path";
import { Node, parseMarkdown } from "../parser/parse-md";
import { camelCase, kebabCase } from "change-case";
import { resolveType, TTypeInfo } from "../store";
import { Native } from "../models/native";


function removeInvalidChars(str: string): string {
    if (!str) {
        return '';
    } 
    return str.replace(/[:;.,!?]/g, '');
}

const reserved = new Set<string>([
    "true",
    "default"
])

function replaceReserved(name: string): string {
    if (reserved.has(name)) {
        return '_' +name;
    }

    return name;
}

export class FunctionsGenerator {
    private readonly _folder: string;
    private readonly _outFolder: string;

    constructor(folder: string, outFolder: string) {
        this._folder = folder;
        this._outFolder = outFolder
    }

    private _natives = new Map<string, Native[]>();

    public async generate() {
        const inFolder = path.join(process.cwd(), `native-db/${this._folder}`);
        const outFolder = path.join(process.cwd(), `${this._outFolder}/${this._folder}`);
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
            const folder = kebabCase(namespace);
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
        let runtimeName = camelCase(nativeName);

        if (!Number.isNaN(parseInt(runtimeName[0]))) {
            runtimeName = 'n_' + runtimeName;
        }


        native.name = runtimeName;
        native.namespace = camelCase(namespace);
    }

    private parseParameters(node: Node, native: Native): void {
        const parameters = (node.findChildByName('Parameters')?.content ?? []).map(data => data
            .split('\n')
            .filter(x => x.startsWith('*'))
            .join('\n')
            .replace('*', '').replace(/\*\*/g, '').trim())
            .map(x => x.split(':')[0])
            .map(removeInvalidChars)
            .filter(Boolean);

        parameters.forEach(param => {
            let [type, name] = param.split(' ');
            const isPointer = type.endsWith('\*');
            if (isPointer) {
                type = type.replace('\\*', '');
            }

            type = removeInvalidChars(type);
            name = replaceReserved(removeInvalidChars(name));

            let defaultValue = param.split('=')[1]?.split(':')[0].trim();
       

            const runtimeType = resolveType(type);

           
            native.parameters.push({ type: runtimeType, name, isPointer, defaultValue: defaultValue });
        });

        let returnType = node.findChildByName('Returns')?.content
        .filter(x => x.startsWith('*'))
        .map(data => data.replace(/\**/g, '').trim().split(':')[0])
        .filter(Boolean);

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