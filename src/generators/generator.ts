import path from 'path';
import { Node, parseMarkdown } from '../parser/parse-md'
import { mkdir, readdir, readFile, rmdir, writeFile } from 'fs/promises';
import { types } from '../store';

export type TParsedNames = { nativeName: string, runtimeName: string, fileName: string }

export type TParseResult = {
    content: string;
}


export abstract class Generator {
    protected _folder: string;
    protected _outFolder: string;

    constructor(folder: string, outFolder: string) {
        this._folder = folder;
        this._outFolder = outFolder;
    }

    public async generate(): Promise<void> {
        const inFolder = path.join(process.cwd(), `native-db/${this._folder}`);
        const outFolder = path.join(process.cwd(), `${this._outFolder}/${this._folder}`);

        await rmdir(outFolder, { recursive: true }).catch(() => { });
        await mkdir(outFolder).catch(() => { });

        const dir = await readdir(inFolder);

        const files: string[] = [];

        for (const file of dir) {
            const fileContent = await readFile(path.join(inFolder, file), 'utf-8');
            const node = parseMarkdown(fileContent);
            const { content } = this.parse(node);
            const { nativeName, fileName, runtimeName } = this.getNames(node);
            await writeFile(path.join(outFolder, fileName), content);
            files.push(fileName);

            types[nativeName] = {
                name: runtimeName,
                folder: this._folder,
                file: fileName
            }
        }

        const indexContent = files.map(file => `export * from './${file.replace('.ts', '')}';`).join('\n');
        await writeFile(path.join(outFolder, 'index.ts'), indexContent);
    }

    protected abstract parse(node: Node): TParseResult;
    protected abstract getNames(node: Node): TParsedNames;
}