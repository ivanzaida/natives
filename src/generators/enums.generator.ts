import { Generator, TParsedNames, TParseResult } from "./generator";
import { Node } from '../parser/parse-md'
import { kebabCase, pascalCase } from "change-case";
import { joaat } from "../joaat";
import { writeFile } from "fs/promises";
import path from "path";
import { enums } from "../store";

const fnRegex = /(\w+)\("([^"]+)"\)/;;

const fnHandlers: Record<string, (s: string) => number> = {
    ['hash']: (value: string) => {
        return joaat(value)
    }
}

export class EnumsGenerator extends Generator {
    protected getNames(node: Node): TParsedNames {
        const native = node.children[0].title;
        let kebab = kebabCase(native);

        if (kebab.startsWith('e-')) {
            kebab = kebab.replace('e-', '');
        }


        const fileName = `${kebab}.enum.ts`;
        const runtimeName = `E${pascalCase(kebab)}`;


        return {
            nativeName: native,
            runtimeName:runtimeName,
            fileName: fileName
        }
    }

    protected parse(node: Node): TParseResult {
        const names = this.getNames(node);
        const values = node.findChildByName('Values');
        const members = values ? values.content.map(x => x.replace('* ', '')) : [];
        const buffer = [`export enum ${names.runtimeName} {`]
        enums.set(names.nativeName, 'INT');
        members.forEach(member => {
            let [value, comment] = member.split(': ');

            if (!value) {
                return
            }
            const [k, v] = value.split('=').map(x => x.trim().replace(/""/g, '"'));
            const fnRes = fnRegex.exec(v);

            if (fnRes) {
                const [, func, arg] = fnRes;
                const handler = fnHandlers[func];
                if (!handler) {
                    throw new Error(`Unknown function: ${func}`)
                }
                value = `${k} = ${handler(arg)}`
            }

            let str = `\t${value},`



            buffer.push(str)
        })
        buffer.push(`}`)

        const content = buffer.join('\n');
        return {
            content,
        }
    }

}