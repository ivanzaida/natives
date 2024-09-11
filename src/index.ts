import { cp, readdir, rmdir, writeFile, mkdir } from "fs/promises";
import { EnumParser } from "./parsers/enum.parser";
import { NativeParser } from "./parsers/native.parser";
import { StructParser } from "./parsers/struct.parser";
import { TypedefsParser } from "./parsers/typedefs.parser";
import path from "path";
import { TypeResolver } from "./utils/type-resolver";
import { FileUtils } from "./utils/file-utils";
import { ENUMS_FOLDER, FUNCTIONS_FOLDER, MODELS_PROJECT_NAME, NATIVES_PROJECT_NAME, STRUCTS_FOLDER, TYPEDEFS_FOLDER } from "./const";
import { CfxParser } from "./parsers/cfx.parser";
import { buildFivemTypes, buildMonorepoPackageJson, buildPackageJson, buildTsConfig } from "./utils/build-package";
import { execSync } from "child_process";
import { log } from "console";



const buildModels = async (outFolder: string) => {
    FileUtils.setReplacement('native-db/enums/PED_CONFIG_FLAGS.md', 'replacements/PED_CONFIG_FLAGS.md')
    FileUtils.setReplacement('native-db/enums/PED_RESET_FLAGS.md', 'replacements/PED_RESET_FLAGS.md')
    FileUtils.setReplacement('native-db/enums/VEHICLE_SEAT.md', 'replacements/VEHICLE_SEAT.md')
    FileUtils.setReplacement('native-db/enums/APPLY_FORCE_TYPE.md', 'replacements/APPLY_FORCE_TYPE.md')

    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'vector3.ts', folder: 'types', nativeName: 'vector', runtimeName: 'Vector3' }, 24);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'int-ptr.ts', folder: 'types', nativeName: 'int*', runtimeName: 'IntPtr' }, 8);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'float-ptr.ts', folder: 'types', nativeName: 'float*', runtimeName: 'FloatPtr' }, 8);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'string-ptr.ts', folder: 'types', nativeName: 'string*', runtimeName: 'StringPtr' }, 0);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'bool-ptr.ts', folder: 'types', nativeName: 'bool*', runtimeName: 'BoolPtr' }, 8);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'vector-ptr.ts', folder: 'types', nativeName: 'VectorPtr', runtimeName: 'VectorPtr' }, 0);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'vector-ptr.ts', folder: 'types', nativeName: 'Vector3*', runtimeName: 'VectorPtr' }, 0);
    TypeResolver.addType({ project: MODELS_PROJECT_NAME, fileName: 'vector-ptr.ts', folder: 'types', nativeName: 'Vector3', runtimeName: 'VectorPtr' }, 0);

    const modelsOutFolder = path.join(outFolder, MODELS_PROJECT_NAME);
    const modelsSrc = path.join(modelsOutFolder, 'src');

    await rmdir(modelsSrc, { recursive: true }).catch(() => { });
    await mkdir(modelsSrc, { recursive: true });
    await cp(path.resolve(__dirname, 'types'), `${modelsSrc}/types`, { recursive: true });

    const typedefsParser = new TypedefsParser(`native-db/${TYPEDEFS_FOLDER}`, `${modelsSrc}/${TYPEDEFS_FOLDER}`);
    await typedefsParser.parse();

    const enumParser = new EnumParser(`native-db/${ENUMS_FOLDER}`, `${modelsSrc}/${ENUMS_FOLDER}`);
    await enumParser.parse();

    const structParser = new StructParser(`native-db/${STRUCTS_FOLDER}`, `${modelsSrc}/${STRUCTS_FOLDER}`);
    await structParser.parse();

    const folders = await readdir(modelsSrc);
    const index = folders.map((folder) => `export * from './${folder}';`).join('\n');
    await writeFile(`${modelsSrc}/index.ts`, index);


    const packageJson = buildPackageJson(MODELS_PROJECT_NAME);
    const tsConfig = buildTsConfig();
    await writeFile(`${modelsOutFolder}/package.json`, JSON.stringify(packageJson, null, 2));
    await writeFile(`${modelsOutFolder}/tsconfig.json`, tsConfig);
    execSync('yarn install', { cwd: modelsOutFolder, stdio: 'inherit' });
    execSync('yarn build', { cwd: modelsOutFolder, stdio: 'inherit' });
}

const buildNatives = async (outFolder: string) => {
    const nativesOutFolder = path.join(outFolder, NATIVES_PROJECT_NAME);
    const src = 'src';
    const nativesSrc = path.join(nativesOutFolder, src);

    const nativeParser = new NativeParser(`native-db/${FUNCTIONS_FOLDER}`, nativesSrc);
    await nativeParser.parse();

    const packageJson = buildPackageJson(NATIVES_PROJECT_NAME, [MODELS_PROJECT_NAME]);
    const dtsFile = 'index.d.ts';
    const tsConfig = buildTsConfig([dtsFile]);
    await writeFile(path.join(nativesOutFolder, dtsFile), buildFivemTypes(), 'utf-8');
    await writeFile(path.join(`${nativesOutFolder}`, 'package.json'), JSON.stringify(packageJson, null, 2));
    await writeFile(path.join(`${nativesOutFolder}`, 'tsconfig.json'), tsConfig);

    execSync('yarn install', { cwd: nativesOutFolder, stdio: 'inherit' });
    execSync('yarn build', { cwd: nativesOutFolder, stdio: 'inherit' });
}

const main = async () => {
    const outFolder = 'out';

    await rmdir(outFolder, { recursive: true }).catch(() => { });
    await mkdir(outFolder, { recursive: true });
    await writeFile(path.join(outFolder, 'package.json'), JSON.stringify(buildMonorepoPackageJson([NATIVES_PROJECT_NAME, MODELS_PROJECT_NAME]), null, 2), 'utf-8');
    await buildModels(outFolder);
    await buildNatives(outFolder);

    return;

    const folders = await readdir(outFolder);
    const index = folders.map((folder) => `export * from './${folder}';`).join('\n');
    await writeFile(`${outFolder}/index.ts`, index);

    const registerTypeAlias = (source: string, nativeName: string, runtimeName = nativeName) => {
        const type = TypeResolver.getType(source);

        if (!type) {
            throw new Error(`Failed to find type ${source}`);
        }

        TypeResolver.addAlias(nativeName, source);
        TypeResolver.addAlias(runtimeName, source);
        TypeResolver.addType({
            ...type, nativeName, runtimeName,
        }, TypeResolver.getTypeSize(source)!);
    }

    registerTypeAlias('ENTITY_INDEX', 'Entity');
    registerTypeAlias('int*', 'Entity*');
    registerTypeAlias('int*', 'Hash*');
    registerTypeAlias('int*', 'Object*');
    registerTypeAlias('VEHICLE_INDEX', 'Vehicle');
    registerTypeAlias('VEHICLE_INDEX', 'Vehicle*', 'VehicleIndex');
    registerTypeAlias('CAMERA_INDEX', 'Cam');
    registerTypeAlias('PED_INDEX', 'Ped');
    registerTypeAlias('PED_INDEX', 'Ped*', 'PedIndex');
    registerTypeAlias('PLAYER_INDEX', 'Player');
    registerTypeAlias('PLAYER_INDEX', 'Player*');
    registerTypeAlias('BLIP_INDEX', 'Blip')
    registerTypeAlias('BLIP_INDEX', 'Blip*')
    registerTypeAlias('Any', 'Any*')

    const cfxParser = new CfxParser(`native-decls`, `${outFolder}/cfx`);
    await cfxParser.parse();
}

main();