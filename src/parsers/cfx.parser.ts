import { log } from "console";
import { glob } from "fast-glob";
import { FileUtils } from "../utils/file-utils";
import parseMD from "parse-md";
import { Native, TFuncParam } from "../models/func";
import { MdParser } from "../utils/md-parser";
import { camelCase, pascalCase } from "change-case";
import { joaat } from "../joaat";
import { TypeResolver } from "../utils/type-resolver";

type TCfxMetadata = {
    ns: string;
    game: string;
    apiset: string;
}

type TFunctionSignature = {
    returnType: string;
    functionName: string;
    params: { name: string, type: string }[];
}

export class CfxParser {
    private readonly _inFolder: string;
    private readonly _outFolder: string;

    constructor(inFolder: string, outFolder: string) {
        this._inFolder = inFolder;
        this._outFolder = outFolder;
    }

    public async parse(): Promise<void> {
        const files = await glob(`${this._inFolder}/**/*.md`);

        const sharedFunctions: Native[] = [];
        const serverFunctions: Native[] = [];
        const clientFunctions: Native[] = [];

        const games = new Set<string>();

        for (const file of files) {
            const fileContent = await FileUtils.readFile(file);
            const { metadata } = parseMD(fileContent) as { metadata: TCfxMetadata };

            if (metadata.game && metadata.game !== 'gta5') {
            }

            const code = MdParser.parseCode(fileContent);
            let name = fileContent.split('\n').find(x => x.includes('##'));

            if (!name) {
                throw new Error(`Failed to parse name from ${file}`);
            }

            name = MdParser.removeTextStyle(name);

            if (TypeResolver.hasNative(name)) {
                // log(`Skipping native ${name}`);
                continue;
            }


            const func = code.map(CfxParser._parseFunction).filter(Boolean).find(x => x.functionName === name);

            if (!func) {
                throw new Error(`Failed to parse function from ${file}`);
            }

            const returnType = TypeResolver.getType(func.returnType);

            if (!returnType) {
                throw new Error(`Failed to parse ${func.returnType} from ${file}`);
            }

            const params: TFuncParam[] = func.params.map(param => {
                let field = MdParser.parseField(`${param.type} ${param.name}`);

                if (field.type === "char" && field.isPointer) {
                    field = { ...field, type: "string" };
                }

                let type = TypeResolver.getType(field.type);


                if (!type) {
                    throw new Error(`Failed to parse ${param.name}: ${param.type} from ${file}`);
                }

                const alias = TypeResolver.getAlias(field.type);

                if (alias) {
                    type = TypeResolver.getType(alias)!;
                }

                return { type, field };
            })

            const native = new Native(this._inFolder, metadata.ns, func.functionName, camelCase(name), '0x' + joaat(name).toString(16), params, returnType, []);

         

        }

        log(`Games: ${Array.from(games).join(', ')}`);
    }

    private static _parseFunction(code: string): TFunctionSignature {
        // Regular expression to capture return type, function name, and parameters
        const regex = /([\w\s\*]+)\s+(\w+)\s*\((.*)\);/;
        const match = code.match(regex);

        if (match) {
            const returnType = match[1];  // Capture group 1: return type
            const functionName = match[2];  // Capture group 2: function name
            const params = match[3];  // Capture group 3: parameters

            // Split the parameters by comma and trim whitespace
            const paramList = params.split(',').map(param => param.trim()).filter(Boolean);
            // Map the paramList to return objects with type and name
            const parsedParams = paramList.map(param => {
                const [type, name] = param.split(/\s+/); // Split each param into type and name
                return { type, name };
            });

            return {
                returnType,
                functionName,
                params: parsedParams
            };
        } else {
            return null!;
        }
    }
}