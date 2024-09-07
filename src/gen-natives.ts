import { cp, rmdir, writeFile, readdir, stat } from "fs/promises";
import { EnumsGenerator } from "./generators/enums.generator";
import { TypedefsGenerator } from "./generators/typedefs.generator";
import { StructsGenerator } from "./generators/structs.generator";
import path from "path";
import { FunctionsGenerator } from "./generators/functions.generator";
import { log } from "console";
import { defs, noop, tsconfig } from "./const";

const main = async () => {
    const outFolder = 'natives';
    const dist = path.join(process.cwd(), outFolder);
    await rmdir(dist, { recursive: true }).catch(noop);
    await cp(path.resolve(__dirname, 'predef'), `${outFolder}/predef`, {recursive: true});

    const enumsGenerator = new EnumsGenerator('enums', outFolder);
    await enumsGenerator.generate();
    const typedefsGenerator = new TypedefsGenerator('typedefs', outFolder);
    await typedefsGenerator.generate();
    const structsGenerator = new StructsGenerator('structs', outFolder);
    await structsGenerator.generate();
    const functionsGenerator = new FunctionsGenerator('functions', outFolder);
    await functionsGenerator.generate();
   
    const files = await readdir(path.join(process.cwd(), outFolder));
  
    const typesDeclFile = 'index.d.ts';
    const indexFile = path.join(process.cwd(), outFolder, 'index.ts');
    await writeFile(indexFile, files.map(folder => `export * from './${folder}';`).join('\n'));
    files.push('index.ts');
    await writeFile(path.join(process.cwd(), outFolder, 'tsconfig.json'), tsconfig.replace( '{{files}}', JSON.stringify(files)).replace('{{typesDecl}}', typesDeclFile));
    await writeFile(path.join(process.cwd(), outFolder, typesDeclFile), defs);
    log('Done generating natives');
}

main()
