import { log } from "console";
import { TTypeInfo } from "../models/type-info";

export abstract class TypeResolver {
    private static readonly _aliases = new Map<string, string>();
    
    private static readonly _primitives = new Map<string, string>([
        ['int', 'number'],
        ['float', 'number'],
        ['string', 'string'],
        ['void', 'void'],
        ['bool', 'boolean'],
        ['char*', 'string'],
        ['TEXT_LABEL_23'.toLowerCase(), 'string'],
        ['TEXT_LABEL_31'.toLowerCase(), 'string'],
        ['TEXT_LABEL_63'.toLowerCase(), 'string'],
        ['TEXT_LABEL'.toLowerCase(), 'string'],
        ['TEXT_LABEL_3'.toLowerCase(), 'string'],
        ['TEXT_LABEL_7'.toLowerCase(), 'string'],
        ['TEXT_LABEL_15'.toLowerCase(), 'string'],
        ['DATAFILE_DICT'.toLowerCase(), 'string'],
        ['DATAFILE_ARRAY'.toLowerCase(), 'string[]'],
        ['UNKNOWN'.toLowerCase(), 'unknown'],
        ['STRUCT'.toLowerCase(), 'DataView'],
    ]);

    private static readonly _typeSizes = new Map<string, number>([
        ['int', 8],
        ['float', 8],
        ['string', 64],
        ['void', 0],
        ['bool', 8],
        ['char*', 8],
        ['DATAFILE_DICT'.toLowerCase(), 64],
        ['TEXT_LABEL'.toLowerCase(), 64],
        ['TEXT_LABEL_3'.toLowerCase(), 4],
        ['TEXT_LABEL_7'.toLowerCase(), 8],
        ['TEXT_LABEL_15'.toLowerCase(), 16],
        ['TEXT_LABEL_23'.toLowerCase(), 24],
        ['TEXT_LABEL_31'.toLowerCase(), 32],
        ['TEXT_LABEL_63'.toLowerCase(), 64],
        ['VECTOR'.toLowerCase(), 24]
    ]);

    private static readonly _generatedTypes = new Map<string, TTypeInfo>([
        ['int*', { folder: 'types', fileName: 'intptr.ts', runtimeName: 'IntPtr', nativeName: 'int*' }],
        ['float*', { folder: 'types', fileName: 'floatptr.ts', runtimeName: 'FloatPtr', nativeName: 'float*' }],
        ['vector', { folder: 'types', fileName: 'vector3.ts', runtimeName: 'Vector', nativeName: 'vector' }],
        
    ]);

    public static isPrimitiveType(nativeType: string): boolean {
        return this._primitives.has(nativeType.trim().toLowerCase());
    }

    public static getTypeSize(nativeType: string): number | undefined {
        return this._typeSizes.get(nativeType.trim().toLowerCase());
    }

    public static getType(name: string): TTypeInfo | undefined {
        const lowerName = name.toLowerCase();
        if (this._primitives.has(lowerName)) {
            return { nativeName: name, fileName: '', folder: '', runtimeName: this._primitives.get(lowerName)! };
        }
        return this._generatedTypes.get(lowerName);
    }

    public static addType(type: TTypeInfo, size: number): void {
        this._generatedTypes.set(type.nativeName.toLowerCase(), type);
        this._typeSizes.set(type.nativeName.toLowerCase(), size);
    }

    public static isStruct(type: string) {
        const resolved = this.getType(type);
        return resolved?.folder === 'structs';
    }

    public static isEnum(type: string) {
        const resolved = this.getType(type);
        return resolved?.folder === 'enums';
    }

    public static isTypedef(type: string) {
        const resolved = this.getType(type);
        return resolved?.folder === 'typedefs';
    }
    
    public static resolveImports(currFolder: string, rawTypes: string[]): string[] {
        const types = rawTypes.map(t => this.getType(t)).filter(Boolean) as TTypeInfo[];
        const imports = new Map<string, Set<string>>();

        for (const type of types) {
            if (!type.folder) {
                continue;
            }

            const key = type.folder === currFolder ? `./${type.fileName.replace('.ts', '')}` : `../${type.folder}/${type.fileName.replace('.ts', '')}`;

            if (!imports.has(key)) {
                imports.set(key, new Set());
            }

            imports.get(key)!.add(type.runtimeName);
        }

        const buffer: string[] = [];

        for (const [key, values] of imports) {
            buffer.push(`import { ${Array.from(values).join(', ')} } from '${key}'`);
        }


        return buffer;
    }

    public static addAlias(nativeName: string, runtimeName: string): void {
        this._aliases.set(nativeName, runtimeName);
    }

    public static getAlias(nativeName: string): string  {
        return this._aliases.get(nativeName) ?? nativeName;
    }
}