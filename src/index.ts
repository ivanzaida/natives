import { cp, readdir, rmdir } from "fs/promises";
import { EnumParser } from "./parsers/enum.parser";
import { NativeParser } from "./parsers/native.parser";
import { StructParser } from "./parsers/struct.parser";
import { TypedefsParser } from "./parsers/typedefs.parser";
import path from "path";
import { TypeResolver } from "./utils/type-resolver";

const main = async () => {
    const outFolder = 'out/natives';

    await rmdir(outFolder, { recursive: true }).catch(() => { });
    await cp(path.resolve(__dirname,'types'), `${outFolder}/types`, {recursive: true});

    TypeResolver.addType({fileName: 'vector3.ts', folder: 'types', nativeName: 'vector', runtimeName: 'Vector3'}, 24);
    TypeResolver.addType({fileName: 'intptr.ts', folder: 'types', nativeName: 'int*', runtimeName: 'IntPtr'}, 8);
    TypeResolver.addType({fileName: 'floatptr.ts', folder: 'types', nativeName: 'float*', runtimeName: 'FloatPtr'}, 8);

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