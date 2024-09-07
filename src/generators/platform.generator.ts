import { log } from 'console';
import path from 'path';
import fg from 'fast-glob'
import { readFile } from 'fs/promises';
import parseMD from 'parse-md'
import { parseMarkdown } from '../parser/parse-md';

class Func { 
    public name: string;
    public returnType: string;
    public params: { type: string, name: string }[];
}

export class PlatformGenerator {
    private readonly _folder: string;
    private readonly _sourcesFolder: string;

    constructor(folder: string, sourcesFolder: string) {
        this._folder = folder;
        this._sourcesFolder = sourcesFolder;
    }

    public async generate(): Promise<void> {
        const sources = path.resolve(process.cwd(), this._sourcesFolder);
        const files = await fg.async('**/*.md', { cwd: sources });
        await Promise.all(files.map(async file => {
            const content = await readFile(path.join(sources, file), 'utf-8');
            const {metadata} = parseMD(content);
            const node = parseMarkdown(content)
            if (file === 'AddMinimapOverlay.md') {
                log(metadata);
                log(node)
            }

        }));
    }
}