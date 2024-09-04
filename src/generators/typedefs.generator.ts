import { Node } from "../parser/parse-md";
import { Generator, TParsedNames, TParseResult } from "./generator";
import { kebabCase, pascalCase } from "change-case";
import { typedefs, types } from "../store";

export class TypedefsGenerator extends Generator {
    protected getNames(node: Node): TParsedNames {
        const content = node.children[0].title;

        const [name, type] = content.split(':').map(x => x.trim()).filter(Boolean);

        return {
            nativeName: name,
            runtimeName: 'T' + pascalCase(name),
            fileName: `${kebabCase(name)}.type.ts`
        }
    }

    protected parse(node: Node): TParseResult {
        const { runtimeName, nativeName } = this.getNames(node);
        const content = node.children[0].title;
        const [name, type] = content.split(':').map(x => x.trim()).filter(Boolean);
        typedefs.set(nativeName, type);
        const runtimeType = types[type];
        return {content: `export type ${runtimeName} = ${runtimeType.name};`};
    }
}