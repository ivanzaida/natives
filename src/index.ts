import { cp, rmdir } from "fs/promises";
import { EnumsGenerator } from "./generators/enums.generator";
import { TypedefsGenerator } from "./generators/typedefs.generator";
import { StructsGenerator } from "./generators/structs.generator";
import path from "path";

const noop = () => { }

const main = async () => {
    await rmdir('generated/predef', {recursive: true}).catch(noop);
    await cp(path.resolve(__dirname, 'predef'), 'generated/predef', {recursive: true});

    const enumsGenerator = new EnumsGenerator('enums');
    await enumsGenerator.generate();
    const typedefsGenerator = new TypedefsGenerator('typedefs');
    await typedefsGenerator.generate();
    const structsGenerator = new StructsGenerator('structs');
    await structsGenerator.generate();
}

main()
