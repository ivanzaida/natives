import { camelCase, kebabCase, pascalCase } from "change-case";
import { Node, parseMarkdown } from "../parser/parse-md";
import { Generator, TParsedNames, TParseResult } from "./generator";
import { enums, resolveType, structs, typedefs } from "../store";
import { log } from "console";
import path from "path";
import { readdir, readFile } from "fs/promises";
import { types } from "../store";

type TField = {
    type: string;
    nativeType: string;
    name: string;
    size: number;
}



const sizeCache = new Map<string, number>([
    ['BOOL', 8],
    ['FLOAT', 8],
    ['INT', 8],
    ['STRING', 32],
    ['VECTOR', 24],
    ['TEXT_LABEL', 64]
]);

const arrayPattern = /(\w+)\[(\d+)\]/;

const sizeParsers = new Map<RegExp, (field: string) => number>();

sizeParsers.set(/STRING\[\d+\]/, (field) => {
    const size = parseInt(field.match(/\d+/)![0]);
    return size * sizeCache.get('STRING')!;
});

sizeParsers.set(/INT\[\d+\]/, (field) => {
    const size = parseInt(field.match(/\d+/)![0]);
    return size * sizeCache.get('INT')!;
});


sizeParsers.set(/FLOAT\[\d+\]/, (field) => {
    const size = parseInt(field.match(/\d+/)![0]);
    return size * sizeCache.get('INT')!;
});

sizeParsers.set(/TEXT_LABEL_\d+/, (field) => {
    const size = parseInt(field.match(/\d+/)![0]) + 1;

    const arrayExec = arrayPattern.exec(field);

    if (arrayExec) {
        const arraySize = parseInt(arrayExec[2]);
        return size * arraySize;
    }

    return size;
})

const viewMethods = new Map<string, (offset: number) => string>([
    ['INT', (offset) => `view.getInt32(${offset}, true)`],
    ['STRING', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 31})`],
    ['FLOAT', (offset) => `view.getFloat32(${offset}, true)`],
    ['BOOL', (offset) => `view.getInt8(${offset}) === 1`],
    ['TEXT_LABEL_31', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 31})`],
    ['TEXT_LABEL_7', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 7})`],
    ['TEXT_LABEL_63', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 63})`],
    ['TEXT_LABEL', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 63})`],
    ['TEXT_LABEL_23', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 23})`],
    ['TEXT_LABEL_15', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 15})`],
    ['TEXT_LABEL_31', (offset) => `getStringFromDataView(view, ${offset}, ${offset + 31})`],
    ['VECTOR', (offset) => `new Vector3(view.getFloat32(${offset}, true), view.getFloat32(${offset + 8}, true), view.getFloat32(${offset + 16}, true))`],
]);

export class StructsGenerator extends Generator {
    private readonly _replacements = new Map([
        ['casinochipmetric', 'casino-chip-metric'],
        ['casinometric', 'casino-metric'],
        ['casinometriclight', 'casino-metric-light'],
        ['insidetrackmetric', 'inside-track-metric'],
        ['insidetrackmetriclight', 'inside-track-metric-light'],
        ['slotmachinemetric', 'slot-machine-metric'],
        ['slotmachinemetriclight', 'slot-machine-metric-light'],
        ['blackjackmetric', 'blackjack-metric'],
        ['blackjackmetriclight', 'blackjack-metric-light'],
    ])

    private readonly _structs: Record<string, { fields: TField[], size: number }> = {};

    protected getNames(node: Node): TParsedNames {
        const native = node.children[0].title;

        let kebab = kebabCase(native);

        if (kebab.startsWith('struct-')) {
            kebab = kebab.replace('struct-', '');
        }
        if (kebab.startsWith('s-')) {
            kebab = kebab.replace('s-', '');
        }

        if (kebab.startsWith('scr-')) {
            kebab = kebab.replace('scr-', '');
        }

        if (kebab.startsWith('src-')) {
            kebab = kebab.replace('src-', '');
        }

        if (kebab.startsWith('rs-ref-')) {
            kebab = kebab.replace('rs-ref-', '');
        }

        if (kebab.startsWith('fm-')) {
            kebab = kebab.replace('fm-', '');
        }

        if (kebab.startsWith('sc-')) {
            kebab = kebab.replace('sc-', '');
        }

        if (this._replacements.has(kebab)) {
            kebab = this._replacements.get(kebab)!;
        }


        return {
            nativeName: native,
            runtimeName: pascalCase(kebab),
            fileName: `${kebab}.struct.ts`
        }
    }

    public override async generate(): Promise<void> {
        const inFolder = path.join(process.cwd(), `native-db/${this._folder}`);
        const dir = await readdir(inFolder);
        const p = dir.map(async file => {
            const fileContent = await readFile(path.join(inFolder, file), 'utf-8');
            const node = parseMarkdown(fileContent);
            const name = this.getNames(node).nativeName;
            const fields = (node.findChildByName('Fields')?.content ?? []).map(x => x.replace(/\*/g, '').trim()).filter(Boolean);
            const structFields: TField[] = [];
            structs.add(name);
            for (const field of fields) {
                let [name, type, size] = this.parseField(field);
                const resolved = resolveType(type);
                structFields.push({ type: resolved.name, nativeType: type, name, size });
            }
            this._structs[name] = { fields: structFields, size: 0 };
        });

        await Promise.all(p);

        const countStructSize = (name: string) => {
            const struct = this._structs[name];

            const fields = struct.fields;
            let structSize = 0;
            fields.forEach(field => {
                let multiplier = field.size;

                if (this._structs[field.nativeType]) {
                    countStructSize(field.nativeType);
                    sizeCache.set(field.nativeType, this._structs[field.nativeType].size);
                }

                if (enums.has(field.nativeType)) {
                    const size = sizeCache.get(enums.get(field.nativeType)!)!;
                    sizeCache.set(field.nativeType, size);
                }

                if (typedefs.has(field.nativeType)) {
                    const size = sizeCache.get(typedefs.get(field.nativeType)!)!;
                    sizeCache.set(field.nativeType, size);
                }

                if (!sizeCache.has(field.nativeType)) {
                    for (const [pattern, parser] of sizeParsers) {
                        if (pattern.test(field.nativeType)) {
                            const size = parser(field.nativeType);
                            sizeCache.set(field.nativeType, size);
                            break;
                        }
                    }
                }


                if (!sizeCache.has(field.nativeType)) {
                    log(`Unknown size for ${field.nativeType} in struct ${name}`);
                } else {
                    structSize += sizeCache.get(field.nativeType)! * multiplier;
                }

            })

            struct.size = structSize;

            if (structSize === 0) {
                log(`Struct ${name} has size 0`);
            }
        }

        Object.keys(this._structs).map((name) => {
            countStructSize(name)
        });


        await super.generate();
    }

    protected parse(node: Node): TParseResult {
        const { runtimeName, nativeName } = this.getNames(node);
        const buffer: string[] = [];
        buffer.push(`export class ${runtimeName} {`);

        const fields = (node.findChildByName('Fields')?.content ?? []).map(x => x.replace(/\*/g, '').trim()).filter(Boolean);
        const imports: Record<string, string[]> = {};
        const names: string[] = [];

        for (const field of fields) {
            let [name, type, size] = this.parseField(field);

            if (names.includes(name)) {
                const count = names.filter(x => x === name).length;
                names.push(name);
                name = `${name}_${count + 1}`;
            } else {
                names.push(name);
            }

            const resolved = resolveType(type);

            if (resolved.name === 'string') {
                imports[`../predef`] = ['getStringFromDataView'];
            }


            if (resolved.folder) {
                if (resolved.folder === this._folder && resolved.file) {
                    imports[`./${resolved.file.replace('.ts', '')}`] = [resolved.name];
                } else {
                    imports[`../${resolved.folder}`] = imports[`../${resolved.folder}`] ?? [];
                    imports[`../${resolved.folder}`].push(resolved.name);
                }
            }

            const typeName = size > 1 ? `${resolved.name}[]` : resolved.name;

            buffer.push(`\tpublic readonly ${name}: ${typeName};`);
        }

        if (Object.keys(imports).length > 0) {
            const importBuffer: string[] = [];
            for (let [folder, names] of Object.entries(imports)) {
                names = [...new Set(names)].map(x => {
                    if (x.endsWith('[]')) {
                        return x.replace('[]', '');
                    }
                    return x;
                });

                if (names.includes('string')) {
                    log(names)
                }

                importBuffer.push(`import { ${names.join(', ')} } from "${folder}";`);
            }

            buffer.unshift(...importBuffer, '');
        }

        const size = this._structs[nativeName].size;

        const structsToInject = fields.filter(x => {
            const [name, type] = this.parseField(x);
            return structs.has(type);
        });


        buffer.push(``);
        buffer.push(`\tconstructor(view: DataView) {`);
        buffer.push(`\t\tif (view.byteLength !== ${size}) {`);
        buffer.push(`\t\t\tthrow new Error('Invalid view size');`);
        buffer.push(`\t\t}`);

        let offset = 0;
        fields.forEach((field, index) => {
            let [, type, size] = this.parseField(field);
            const fieldSize = sizeCache.get(type)!;
            const dataSize = fieldSize * size;


            if (enums.has(type)) {
                type = 'INT'
            } else if (typedefs.has(type)) {
                type = typedefs.get(type)!;
            }

            if (structs.has(type)) {
                const structInfo = types[type].name;
                if (!structInfo) {
                    throw new Error(`No struct info for ${type}`);
                }
                if (size === 1) {
                    buffer.push(`\t\tthis.${names[index]} = new ${structInfo}(new DataView(view.buffer.slice(${offset}, ${dataSize + offset})));`);
                } else {
                    log(`Injecting struct ${structInfo} into ${runtimeName}`);
                }
            } else {
                const method = viewMethods.get(type);

                if (!method) {
                    throw new Error(`Unknown type: ${type}`);
                }

                if (size === 1) {
                    buffer.push(`\t\tthis.${names[index]} = ${method(offset)};`);
                } else {
                    const fields: string[] = [];
                    for (let i = 0; i < size; i++) {
                        fields.push(`${method(offset + (fieldSize * i))}`);
                    }
                    buffer.push(`\t\tthis.${names[index]} = [${fields.join(', ')}];`);
                }

            }

            offset += dataSize;
        });

        buffer.push(`\t}`)
        buffer.push(``);
        buffer.push(`\tpublic static get dataView(): DataView {`);
        buffer.push(`\t\treturn new DataView(new ArrayBuffer(${size}));`);
        buffer.push(`\t}`);

        buffer.push(`}`);
        return { content: buffer.join('\n') };
    }

    private parseField(field: string): [string, string, number] {
        let [type, name] = field.split(' ');
        name = name.replace(':', '');
        let size = 1;
        const arrayMatch = type.match(arrayPattern);
        if (arrayMatch) {
            type = arrayMatch[1];
            size = parseInt(arrayMatch[2]);
        }
        return [camelCase(name), type, size]
    }

}