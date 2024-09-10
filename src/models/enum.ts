import { pascalCase } from "change-case";
import { TTypeInfo } from "./type-info";
import { log } from "console";

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

    private static _numbersMap = new Map<string, string>([
        ['0', 'Zero'],
        ['1', 'One'],
        ['2', 'Two'],
        ['3', 'Three'],
        ['4', 'Four'],
        ['5', 'Five'],
        ['6', 'Six'],
        ['7', 'Seven'],
        ['8', 'Eight'],
        ['9', 'Nine'],
    ]);

    constructor(nativeName: string, runtimeName: string, fields: TEnumField[]) {
        this.nativeName = nativeName;
        this.runtimeName = runtimeName;
        this.fields = fields;
    }

    public compile(): string {
        const buffer = [`export enum ${this.runtimeName} {`]
        const firstLetters = this.nativeName.split('_').map((part) => part[0]?.toUpperCase()).join('');

        this.fields.forEach((field, index) => {
            let fieldName = field.name;

            if (field.name.startsWith(firstLetters + '_')) {
                fieldName = field.name.replace(firstLetters + '_', '');
            }

            if (field.name.startsWith(this.nativeName) + '_') {
                fieldName = field.name.replace(this.nativeName + '_', '');
            }

            // check if field name starts with a number
            if (/^\d/.test(fieldName)) {
                const number = fieldName.match(/^\d+/)![0];
                if (!EnumModel._numbersMap.has(number)) {
                    throw new Error(`Unknown number: ${number}`);
                }
                const replacement = EnumModel._numbersMap.get(number);
                fieldName = fieldName.replace(number, replacement!);
            }

            let f = '\t' + pascalCase(fieldName);
            // UP_CASE
       
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