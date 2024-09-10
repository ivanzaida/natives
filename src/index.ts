import { cp, readdir, rmdir } from "fs/promises";
import { EnumParser } from "./parsers/enum.parser";
import { NativeParser } from "./parsers/native.parser";
import { StructParser } from "./parsers/struct.parser";
import { TypedefsParser } from "./parsers/typedefs.parser";
import path from "path";
import { TypeResolver } from "./utils/type-resolver";
import { FileUtils } from "./utils/file-utils";

const main = async () => {
    const outFolder = 'out/natives';

    await rmdir(outFolder, { recursive: true }).catch(() => { });
    await cp(path.resolve(__dirname,'types'), `${outFolder}/types`, {recursive: true});

    FileUtils.setReplacement('native-db/enums/PED_CONFIG_FLAGS.md', 'replacements/PED_CONFIG_FLAGS.md')
    FileUtils.setReplacement('native-db/enums/PED_RESET_FLAGS.md', 'replacements/PED_RESET_FLAGS.md')
    FileUtils.setReplacement('native-db/enums/VEHICLE_SEAT.md', 'replacements/VEHICLE_SEAT.md')
    FileUtils.setReplacement('native-db/enums/APPLY_FORCE_TYPE.md', 'replacements/APPLY_FORCE_TYPE.md')

    TypeResolver.addType({fileName: 'vector3.ts', folder: 'types', nativeName: 'vector', runtimeName: 'Vector3'}, 24);
    TypeResolver.addType({fileName: 'int-ptr.ts', folder: 'types', nativeName: 'int*', runtimeName: 'IntPtr'}, 8);
    TypeResolver.addType({fileName: 'float-ptr.ts', folder: 'types', nativeName: 'float*', runtimeName: 'FloatPtr'}, 8);
    TypeResolver.addType({fileName: 'string-ptr.ts', folder: 'types', nativeName: 'string*', runtimeName: 'StringPtr'}, 0);
    TypeResolver.addType({fileName: 'bool-ptr.ts', folder: 'types', nativeName: 'bool*', runtimeName: 'BoolPtr'}, 8);
    TypeResolver.addType({fileName: 'vector-ptr.ts', folder: 'types', nativeName: 'VectorPtr', runtimeName: 'VectorPtr'}, 0);

    const typedefsParser = new TypedefsParser('native-db/typedefs', `${outFolder}/typedefs`);
    await typedefsParser.parse();

    const enumParser = new EnumParser('native-db/enums', `${outFolder}/enums`);
    await enumParser.parse();

    const structParser = new StructParser('native-db/structs', `${outFolder}/structs`);
    await structParser.parse();

    const nativeParser = new NativeParser('native-db/functions', `${outFolder}/functions`);
    await nativeParser.parse();
}

main();