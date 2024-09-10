import { kebabCase, pascalCase } from "change-case";
import { mkdir, readdir, readFile, rmdir, writeFile } from "fs/promises";
import { MdParser } from "../utils/md-parser";
import { TypeResolver } from "../utils/type-resolver";
import path from "path";
import { log } from "console";
import { TYPEDEFS_FOLDER } from "../const";

export class TypedefsParser {
    private readonly _inFolder: string;
    private readonly _outFolder: string;

    constructor(inFolder: string, outFolder: string) {
        this._inFolder = inFolder;
        this._outFolder = outFolder;
    }

    public async parse(): Promise<void> {
        const files = await readdir(this._inFolder, 'utf-8');
        await rmdir(this._outFolder, { recursive: true }).catch(() => { });
        await mkdir(path.resolve(this._outFolder), { recursive: true });
        const fileNames: string[] = [];

        for (const file of files) {
            const nativeName = file.replace('.md', '');
            const runtimeName = pascalCase(nativeName);
            const content = await readFile(`${this._inFolder}/${file}`, 'utf-8');
            const parsedOut = MdParser.removeTextStyle(content);
            const firstLine = parsedOut.split('\n')[0];
            const [_, type] = firstLine.split(':').map(x => x.trim());
            const resolved = TypeResolver.getType(type);
            if (!resolved) {
                throw new Error(`Failed to resolve type ${type}`);
            }

            const fileName = `${kebabCase(runtimeName)}.ts`;

            TypeResolver.addType({
                ...resolved, nativeName, runtimeName,
                fileName,
                folder: TYPEDEFS_FOLDER,
            }, TypeResolver.getTypeSize(type)!);
            
            TypeResolver.addAlias(nativeName, type);
            TypeResolver.addAlias(runtimeName, type);

            await writeFile(`${this._outFolder}/${fileName}`, `export type ${runtimeName} = ${resolved.runtimeName};`, 'utf-8');
            fileNames.push(fileName);
        }

        const index = fileNames.map(x => `export * from './${x.replace('.ts', '')}';`).join('\n');
        await writeFile(`${this._outFolder}/index.ts`, index, 'utf-8');
    }
}