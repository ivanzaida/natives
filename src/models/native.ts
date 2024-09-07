import { log } from "console";
import { TTypeInfo } from "../store";

export class Native {
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
                let defaultValue = param.defaultValue;
                if (param.type.name === 'number') {
                    defaultValue = Number(defaultValue).toString();
                }
           
    
                ret += ` = ${defaultValue}${excl}`;
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