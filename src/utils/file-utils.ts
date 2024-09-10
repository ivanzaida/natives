import { log } from "console";
import { readFile } from "fs/promises";

export abstract class FileUtils {
    private static _replacements = new Map<string, string>();

    public static setReplacement(source: string, replacement: string): void {
        this._replacements.set(source, replacement);
    }

    public static async readFile(path: string): Promise<string> {
        if (this._replacements.has(path)) {
            log(`Using replacement for ${path}`);
            path = this._replacements.get(path)!;
        }
        return readFile(path, 'utf-8');
    }
}