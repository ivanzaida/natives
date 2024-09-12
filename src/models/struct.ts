import { camelCase } from "change-case";
import { MODELS_PROJECT_NAME, STRING_PTR_TYPE, STRUCTS_FOLDER } from "../const";
import { TStructField } from "../utils/md-parser";
import { TypeResolver } from "../utils/type-resolver";


export class Struct {
    public readonly nativeName: string;
    public readonly name: string;
    public readonly fields: TStructField[];
    public size: number;

    constructor(nativeName: string, name: string, fields: TStructField[]) {
        this.nativeName = nativeName;
        this.name = name;
        this.fields = fields;
    }

    public compile(): string {
        const imports = TypeResolver.resolveImports(MODELS_PROJECT_NAME, STRUCTS_FOLDER, this.fields.map(f => f.type));
        const buffer: string[] = [];

        const hasString = this.fields.some(f => TypeResolver.getType(f.type)!.runtimeName === 'string');

        if (hasString) {
            const type = TypeResolver.getType(STRING_PTR_TYPE)!;
            imports.push(`import { ${type.runtimeName} } from '../${type.folder}/${type.fileName.replace('.ts', '')}';`);
        }


        if (imports.length) {
            buffer.push(...imports);
            buffer.push('');
        }

        buffer.push(`export class ${this.name} {`);
        buffer.push(`\tpublic readonly dataView: DataView;`);
        buffer.push('');
        buffer.push(`\tconstructor(dataView: DataView = new DataView(new ArrayBuffer(${this.size ?? 0}))) {`);
        buffer.push(`\t\tif (dataView.byteLength !== ${this.size}) {`);
        buffer.push(`\t\t\tthrow new Error('Invalid buffer size');`);
        buffer.push(`\t\t}`);
        buffer.push('');
        buffer.push(`\t\tthis.dataView = dataView;`);
        buffer.push(`\t}`);

        let offset = 0;

        const presentFields: string[] = [];
        this.fields.forEach(field => {
            const type = TypeResolver.getType(field.type);
            if (!type) {
                throw new Error(`Failed to resolve type ${field.type}`);
            }

            const typeSize = TypeResolver.getTypeSize(field.type)!;


            let name = camelCase(field.name);
            if (presentFields.includes(field.name)) {
                const count = presentFields.filter(f => f === field.name).length;
                name = `${name}${count + 1}`;
            }
            presentFields.push(field.name);

            buffer.push('');
            buffer.push(`\tpublic get ${name}(): ${type.runtimeName}${field.isArray ? '[]' : ''} {`)


            const fields: string[] = [];

            for (let i = 0; i < field.arraySize; i++) {
                if (TypeResolver.isStruct(field.type)) {
                    fields.push(`new ${type.runtimeName}(new DataView(this.dataView.buffer.slice(${offset}, ${typeSize})))`)
                } else if (TypeResolver.isEnum(field.type)) {
                    fields.push(`this.dataView.getInt32(${offset}, true) as ${type.runtimeName}`);
                } else {
                    fields.push(this._getFunc(field.type, offset, typeSize));
                }
                offset += typeSize;
            }

            if (field.isArray) {
                buffer.push(`\t\treturn [\n\t\t\t${fields.join(',\n\t\t\t')}\n\t\t]`);
            } else {
                buffer.push(`\t\treturn ${fields[0]}`);
            }
            buffer.push("\t}");
        });

        buffer.push("}");
        return buffer.join("\n");
    }

    private _getFunc(type: string, offset: number, size: number): string {
        if (TypeResolver.isTypedef(type)) {
            type = 'int';
        }

        switch (type.toLowerCase().trim()) {
            case 'int':
                return `this.dataView.getInt32(${offset}, true)`;
            case 'float':
                return `this.dataView.getFloat32(${offset}, true)`
            case 'bool':
                return `this.dataView.getInt8(${offset}) === 1;`
            case 'string':
            case 'char*':
            case 'TEXT_LABEL'.toLowerCase():
            case 'TEXT_LABEL_3'.toLowerCase():
            case 'TEXT_LABEL_7'.toLowerCase():
            case 'TEXT_LABEL_15'.toLowerCase():
            case 'TEXT_LABEL_23'.toLowerCase():
            case 'TEXT_LABEL_31'.toLowerCase():
            case 'TEXT_LABEL_63'.toLowerCase():
                return `new ${TypeResolver.getType('string*')!.runtimeName}(new DataView(this.dataView.buffer.slice(${offset}, ${size - 1}))).value`;
            case 'vector'.toLowerCase():
                return `new ${TypeResolver.getType('vector')!.runtimeName}(this.dataView.getFloat32(${offset}, true), this.dataView.getFloat32(${offset + 8}, true), this.dataView.getFloat32(${offset + 16}, true))`;
            default:
                throw new Error(`Unknown type: ${type}`);
        }
    }
}