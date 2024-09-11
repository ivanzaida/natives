import { log } from "console";

export type TStructField = {
    name: string;
    type: string;
    isArray: boolean;
    arraySize: number;
    offset: number;
    defaultValue?: string;
    comment?: string;
    isPointer: boolean;
}


export abstract class MdParser {
    public static removeTextStyle(md: string): string {
        // Remove bold (**text** or __text__)
        let cleanedMd = md.replace(/\*\*(.*?)\*\*|__(.*?)__/g, '$1$2');

        // Remove other markdown characters (such as ## for headings)
        cleanedMd = cleanedMd.replace(/[#`>-]/g, '');

        // Replace multiple newlines with a single newline
        cleanedMd = cleanedMd.replace(/\n\s*\n/g, '\n');

        return cleanedMd.trim();
    }

    public static parseSection(sectionName: string, text: string): string {
        const fieldsHeader = `## ${sectionName}`;
        const fieldsIndex = text.indexOf(fieldsHeader);

        if (fieldsIndex === -1) {
            return '';
        }

        const nextHeaderIndex = text.indexOf('##', fieldsIndex + 1);

        let fieldsText = '';
        if (nextHeaderIndex !== -1) {
            fieldsText = text.substring(fieldsIndex + fieldsHeader.length, nextHeaderIndex);
        } else {
            fieldsText = text.substring(fieldsIndex + fieldsHeader.length);
        }

        return fieldsText;
    }

    public static parseList<T extends { [key: string]: string }>(text: string): T[] {
        const lines = text.split('\n');
        const result: T[] = [];

        let headers: string[] = [];

        for (const line of lines) {
            // Check if the line is a header row
            if (line.startsWith('|') && line.includes('---')) {
                continue;
            }

            // Parse header row
            if (line.startsWith('|') && !headers.length) {
                headers = line.split('|').map(header => header.trim()).filter(Boolean);
                continue;
            }

            // Parse data rows
            if (line.startsWith('|')) {
                const values = line.split('|').map(value => value.trim()).filter(Boolean);

                if (values.length === headers.length) {
                    const row: T = {} as T;
                    for (let i = 0; i < headers.length; i++) {
                        const key = headers[i];
                        const value = values[i];
                        Object.defineProperty(row, key, { value, enumerable: true });
                    }
                    result.push(row);
                }
            }
        }
        return result;
    }

    public static parseField(fieldText: string): TStructField {
        let [type, name] = fieldText.split(' ').map(part => part.replace(':', '').trim());

        const nameIndex = fieldText.indexOf(name);
        const afterName = fieldText.substring(nameIndex + name.length).trim();

        let defaultValue = '';
        let comment = '';

        if (afterName.startsWith('=')) {
            const defaultValueIndex = afterName.indexOf('=');
            [defaultValue, comment] = afterName.substring(defaultValueIndex + 1).split(':');
            defaultValue = defaultValue.trim();
            if (defaultValue === 'null') {
                defaultValue = 'null!';
            }
            comment = comment?.trim();
        }

        const isPointer = type.endsWith('\*');

        if (isPointer) {
            type = type.substring(0, type.length - 2);
        }

        let size = 1;
        const typePattern = /(\w+)(\[(\d+)\])?/;
        const match = typePattern.exec(fieldText);

        if (match) {
            type = match[1].trim();  // Extract the type (e.g., STRING)
            size = match[3] ? parseInt(match[3], 10) : 1;  // Extract the size (e.g., 64), or null if not present
        }

        return {
            name,
            type,
            comment,
            arraySize: size,
            isArray: size > 1,
            offset: 0,
            isPointer,
            defaultValue,
        }
    }

    public static parseCode(text: string): string[] {
        // Regular expression to match C code blocks
        const cCodeBlocks = text.match(/```c([\s\S]*?)```/g);

        if (cCodeBlocks) {
            // Remove the "```c" and "```" surrounding the code block
            return cCodeBlocks.map(block => block.replace(/```c|```/g, '').trim());
        } else {
            return [];
        }
    }
}