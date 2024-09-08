import { log } from "console";
import { TypeResolver } from "../utils/type-resolver";
import { TTypeInfo } from "./type-info";
import { TStructField } from "../utils/md-parser";

export type TFuncParam = { field: TStructField, type: TTypeInfo };


export class Native {
    public readonly namespace: string;
    public readonly name: string;
    public readonly hash: string;
    public readonly parameters: TFuncParam[] = [];
    public readonly returnType: TTypeInfo;


    constructor(namespace: string, name: string, hash: string, parameters: TFuncParam[], returnType: TTypeInfo) {
        this.name = name;
        this.hash = hash;
        this.parameters = parameters;
        this.returnType = returnType;
        this.namespace = namespace;
    }

    public compile(): string {
        const buffer: string[] = [];
        const imports = TypeResolver.resolveImports('functions', this.parameters.map(x => x.type).concat(this.returnType).map(x => x.nativeName));
        imports.push(`import { invokeNative } from '../types/invoke-native';`);
        buffer.push(...imports);
        buffer.push('');

        const name = this.name.startsWith('0x') ? '_' + this.name : this.name;
        const pointers: number[] = [];

        const params = this.parameters.map((x, i) => {
            let str = `${x.field.name}: ${x.type.runtimeName}`;
            if (x.field.isPointer && x.type.runtimeName !== 'DataView') {
                pointers.push(i);
                return null;
            }
            return str;
        }).filter(x => x !== null).join(', ');

        let returnType = this.returnType.runtimeName;


        if (pointers.length) {
            const retTypes = [];
            if (returnType !== 'void') {
                retTypes.push(returnType);
            }
            for (const i of pointers) {
                const name = this.parameters[i].field.name;
                const runtimeName = this.parameters[i].type.runtimeName;
                retTypes.push(`${name}: ${runtimeName}`);
            }
            returnType = `[${retTypes.join(', ')}]`;
        }


        buffer.push(`export function ${name}(${params}): ${returnType} {`);

        const passParams = this.parameters.filter(x => {
            if (!x.field.isPointer) {
                return true;
            }
        }).map(x => {
            const name = x.field.name;
            return this._parseReserved(x.field.name);
        });

        const returns: string[] = [];

        const preRuns: string[] = [];
        const postRuns: string[] = [];

        for (const i of pointers) {
            const param = this.parameters[i];
            const name = param.field.name;
            let definition = `\tconst ${name}`;

            if (param.type.nativeName === 'STRUCT') {

            }

            if (param.type.runtimeName === 'Vector3') {
                definition += `_dv = new DataView(new ArrayBuffer(24));`
                postRuns.push(`\tconst ${param.field.name} = new Vector3(${name}_dv.getFloat32(0, true), ${name}_dv.getFloat32(8, true), ${name}_dv.getFloat32(16, true));`);
            }

            if (TypeResolver.isStruct(param.type.nativeName)) {
                definition += ` = new ${param.type.runtimeName}();`
                passParams[i] = `${name}.dataView`;
            }

            if (TypeResolver.isPrimitiveType(param.type.nativeName) || TypeResolver.isTypedef(param.type.nativeName)) {
                let size = TypeResolver.getTypeSize(param.type.nativeName)!;
                const sizeNames = ['size', 'dataSize', 'sizeOfData', 'sizeOfStructNotCount', 'sizeOfStruct', 'stackSize']
                if (param.type.nativeName === 'STRUCT') {
                    const sizeField = this.parameters.find(x => {
                        if (x.type.nativeName === 'INT' && sizeNames.includes(x.field.name)) {
                            return true;
                        }
                        return false;
                    })

                    if (!sizeField) {
                        throw new Error(`Failed to find size for struct in ${this.name}`);
                    }
                    const sizeArg = sizeField.field.name;
                    definition += ` = new DataView(new ArrayBuffer(${sizeArg}));`
                } else {
                    definition += `_dv = new DataView(new ArrayBuffer(${TypeResolver.getTypeSize(param.type.nativeName)}));`
                    const func = this._getDvFunc(`${name}_dv`, TypeResolver.getAlias(param.type.nativeName), size.toString(), 0);
                    postRuns.push(`\tconst ${param.field.name} = ${func};`);
                }
            }

            returns.push(`${name}`);
            preRuns.push(definition);
        }



        let returnSignature = this.returnType.runtimeName;

        if (returnSignature === 'Vector3') {
            returnSignature = `[number, number, number]`;
            returns.unshift('Vector3.fromArray(res)');
        } else {
            returns.unshift('res');

        }

        buffer.push(...preRuns);
        buffer.push(`\tconst res = invokeNative<${returnSignature}>('${this.hash}', ${passParams.join(', ')});`);
        buffer.push(...postRuns);

        if (returns.length > 1) {
            buffer.push(`\treturn [${returns.join(', ')}];`);
        } else if (returns.length === 1) {
            buffer.push(`\treturn ${returns[0]};`);
        }

        buffer.push('}');

        return buffer.join('\n');
    }

    private _getDvFunc(dvName: string, type: string, size: string, offset: number): string {
        const lowerType = type.toLowerCase();
        switch (lowerType) {
            case 'int':
                return `${dvName}.getInt32(${offset}, true)`;
            case 'float':
                return `${dvName}.getFloat32(${offset}, true)`;
            case 'bool':
                return `${dvName}.getUint8(${offset}, true) !== 0`;
            case 'struct':
                return `new DataView(new ArrayBuffer(${size}))`;
        }

        if (lowerType.startsWith('text_label')) {
            let len = parseInt(lowerType.split('_')[2] ?? '64');
            return `new StringPtr(${dvName}.getUint32(${offset}, true), ${len})`;
        }

        return '';
    }


    private _reservedFields = new Set<string>([
        "true", "default"
    ])
    
    private _parseReserved(name: string): string {
        if (this._reservedFields.has(name)) {
            log(`Reserved field name ${name} in ${this.name}`);
            return `_${name}`;
        }
        return name;
    }
}