import { kebabCase, pascalCase } from "change-case";
import { mkdir, readdir, readFile, rmdir, writeFile } from "fs/promises";
import { MdParser } from "../utils/md-parser";
import { joaat } from "../joaat";
import { EnumModel, TEnumField } from "../models/enum";
import { TypeResolver } from "../utils/type-resolver";
import { log } from "console";
import path from "path";
import { ENUMS_FOLDER, INT_TYPE, MODELS_PROJECT_NAME } from "../const";
import { FileUtils } from "../utils/file-utils";

export class EnumParser {
    private readonly _inFolder: string;
    private readonly _outFolder: string;

    private readonly _fns: Record<string, (s: string) => number> = {
        ['hash']: (value: string) => {
            return joaat(value)
        }
    }

    constructor(inFolder: string, outFolder: string) {
        this._inFolder = inFolder;
        this._outFolder = outFolder;
    }

    public async parse(): Promise<void> {
        const files = await readdir(this._inFolder, 'utf-8');
        await rmdir(this._outFolder, { recursive: true }).catch(() => { });
        await mkdir(path.resolve(this._outFolder), { recursive: true });
        const fileNames: string[] = [];

        await Promise.all(files.map(async (file) => {
            const name = this._cleanupName(file);
            const content = await FileUtils.readFile(`${this._inFolder}/${file}`);
            const model = this.parseEnum(file.replace('.md', ''), name, content);
            const int = TypeResolver.getType('int')!;
            TypeResolver.addType({
                ...int, nativeName: model.nativeName, runtimeName: model.runtimeName,
                project: MODELS_PROJECT_NAME,
                folder: ENUMS_FOLDER,
            }, TypeResolver.getTypeSize('int')!);

            const fileName = kebabCase(name).replace('e-', '') + '.enum.ts';
            await writeFile(`${this._outFolder}/${fileName}`, model.compile(), 'utf-8');
            fileNames.push(fileName);
        }));

        const index = fileNames.map(x => `export * from './${x.replace('.ts', '')}';`).join('\n');
        await writeFile(`${this._outFolder}/index.ts`, index, 'utf-8');
    }

    private _cleanupName(name: string): string {
        let kebab = kebabCase(name).replace('-md', '');

        if (kebab.includes('-enum')) {
            kebab = kebab.replace('-enum', '');
        }

        return 'E' + pascalCase(kebab);
    }

    private parseEnum(nativeName: string, enumName: string, content: string): EnumModel {
        const values = MdParser.parseSection('Values', content);
        const lines = values.split('\n');
        const fnRegex = /(\w+)\("([^"]+)"\)/;

        const fields: TEnumField[] = [];
        for (let line of lines) {
            line = line.replace('* ', '').trim();
            if (!line) {
                continue;
            }
            let [nameAndVal, comment] = line.split(':');
            let [name, value] = nameAndVal.split('=').map(x => x.trim().replace(/""/g, '"'));
            comment = comment?.trim();

            if (value === 'hash("DEFAULT_SPLINE_CAMERA"")') {
                value = 'hash("DEFAULT_SPLINE_CAMERA")'; // Fix typo
            }

            value = value?.replace(/[.,;:!?]/g, '')

            if (fnRegex.test(value)) {
                const [, func, arg] = fnRegex.exec(value)!;
                const handler = this._fns[func];
                if (!handler) {
                    throw new Error(`Unknown function: ${func}`);
                }
                value = handler(arg).toString();
            }

            if (value) {
                if (value && Number.isNaN(Number(value))) {
                    throw new Error(`Invalid value for enum ${nativeName}: ${name} = ${value}`);
                } else {
                    value = parseInt(value).toString();
                }
            }


            fields.push({
                name,
                defaultValue: value,
                type: TypeResolver.getType(INT_TYPE)!,
                comment
            });
        }

        TypeResolver.addAlias(enumName, INT_TYPE);
        TypeResolver.addAlias(nativeName, INT_TYPE);


        return new EnumModel(nativeName, enumName, fields);
    }
}