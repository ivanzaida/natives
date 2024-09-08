import { camelCase, kebabCase, pascalCase } from "change-case";
import { log } from "console";
import { mkdir, readdir, readFile, rmdir, writeFile } from "fs/promises";
import { Struct } from "../models/struct";
import { MdParser, TStructField } from "../utils/md-parser";
import { TypeResolver } from "../utils/type-resolver";
import path from "path";

export class StructParser {
    private readonly _inFolder: string;
    private readonly _outFolder: string;

    private _removePrefixes: string[] = [
        "struct-",
        "s-",
        "sc-",
        "scr-"
    ]

    private readonly _structs: Map<string, Struct> = new Map();
    private readonly _sizeCache: Map<string, number> = new Map();

    constructor(inFolder: string, outFolder: string) {
        this._inFolder = inFolder;
        this._outFolder = outFolder;
    }

    public async parse(): Promise<void> {
        const files = await readdir(this._inFolder, 'utf-8');
        await rmdir(this._outFolder, { recursive: true }).catch(() => { });
        await mkdir(path.resolve(this._outFolder), { recursive: true });

        for (const file of files) {
            const name = this._cleanupName(file);
            const content = await readFile(`${this._inFolder}/${file}`, 'utf-8');
            const struct = this._parseStructure(file.replace('.md', ''), content);
            if (!struct?.name) {
                throw new Error(`Failed to parse structure from file ${file}`);
            }
            this._structs.set(struct.nativeName, struct);
       
        }

        for (const struct of this._structs.values()) {
            const size = this._countStructSize(struct);
            TypeResolver.addType({
                nativeName: struct.nativeName,
                runtimeName: struct.name,
                fileName: `${kebabCase(struct.name)}.ts`,
                folder: 'structs'
            }, struct.size)
        }

        for (const struct of this._structs.values()) {
            const fileName = `${kebabCase(struct.name)}.ts`;
            const content = struct.compile();
            await writeFile(`${this._outFolder}/${fileName}`, content, 'utf-8');
        }
    }


    private _cleanupName(name: string): string {
        let kebab = kebabCase(name).replace('-md', '');

        for (const prefix of this._removePrefixes) {
            if (kebab.startsWith(prefix)) {
                kebab = kebab.replace(prefix, '');
            }
        }

        return pascalCase(kebab);
    }

    private _parseStructure(nativeName: string, text: string): Struct | null {
        // Regex pattern to capture structure name
        const namePattern = /# (\w+)/;
        const nameMatch = namePattern.exec(text);

        if (!nameMatch) {
            return null; // If no structure name is found, return null
        }

        const name = this._cleanupName(nativeName); // Structure name is the first group

        const fields: TStructField[] = [];

        const fieldsHeader = '## Fields';
        const fieldsIndex = text.indexOf('## Fields');
        const nextHeaderIndex = text.indexOf('##', fieldsIndex + 1);

        let fieldsText = '';
        if (fieldsIndex !== -1) {
            if (nextHeaderIndex !== -1) {
                fieldsText = text.substring(fieldsIndex + fieldsHeader.length, nextHeaderIndex);
            } else {
                fieldsText = text.substring(fieldsIndex + fieldsHeader.length);
            }
        }

        fieldsText.split('\n').forEach(line => {
            line = MdParser.removeTextStyle(line);
            if (!line) {
                return;
            }

            if (line.startsWith('* ')) {
                line = line.replace('* ', '');
            }

            const field = MdParser.parseField(line);
            fields.push(field);
        });

        return new Struct(nativeName, name, fields);
    }

    private _countStructSize(struct: Struct): number {
        let size = 0;
        struct.fields.forEach(field => {
            field.offset = size;

            if (!this._sizeCache.has(field.type)) {
                const primitiveSize = TypeResolver.getTypeSize(field.type);

                if (primitiveSize) {
                    this._sizeCache.set(field.type, primitiveSize);
                }

                if (this._structs.has(field.type)) {
                    const size = this._countStructSize(this._structs.get(field.type)!);
                    this._sizeCache.set(field.type, size);
                }

            }

            if (!this._sizeCache.has(field.type)) {
                throw new Error(`Failed to resolve size of type ${struct.nativeName}.${field.type}`);
            }

            size += this._sizeCache.get(field.type)! * field.arraySize;
            struct.size = size;
            });

        return size;
    }
}