import { TTypeInfo } from "./type-info";

export type TEnumField = {
    name: string;
    defaultValue?: string;
    type: TTypeInfo;
    comment?: string;
}

export class EnumModel {
    public readonly nativeName: string;
    public readonly runtimeName: string;
    public readonly fields: TEnumField[];

    constructor(nativeName: string, runtimeName: string, fields: TEnumField[]) {
        this.nativeName = nativeName;
        this.runtimeName = runtimeName;
        this.fields = fields;
    }

    public compile(): string {
        const buffer = [`export enum ${this.runtimeName} {`]

        this.fields.forEach((field, index) => {
            let f = '\t' + field.name;

            if (field.defaultValue) {
                f += ` = ${field.defaultValue}`;
            }

            if (field.comment) {
                f += `, // ${field.comment}`;
            } else {
                f += ',';
            }

            buffer.push(f)
        })

        buffer.push('}');
        return buffer.join('\n');
    }
}