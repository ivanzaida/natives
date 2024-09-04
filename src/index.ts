import { cp, rmdir, writeFile, readdir, stat } from "fs/promises";
import { EnumsGenerator } from "./generators/enums.generator";
import { TypedefsGenerator } from "./generators/typedefs.generator";
import { StructsGenerator } from "./generators/structs.generator";
import path from "path";
import { FunctionsGenerator } from "./generators/functions.generator";
import { log } from "console";

const noop = () => { }

const tsconfig = `{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "strictPropertyInitialization": false,
    "typeRoots": ["{{typesDecl}}"]
  },
  "include": {{files}},
}`

const defs = `declare namespace Citizen {
    function invokeNative<T = any>(hash: string, ...args: any[]): T;
}`

const main = async () => {
    const dist = path.join(process.cwd(), 'generated');
    await rmdir(dist, { recursive: true }).catch(noop);
    await cp(path.resolve(__dirname, 'predef'), 'generated/predef', {recursive: true});

    const enumsGenerator = new EnumsGenerator('enums');
    await enumsGenerator.generate();
    const typedefsGenerator = new TypedefsGenerator('typedefs');
    await typedefsGenerator.generate();
    const structsGenerator = new StructsGenerator('structs');
    await structsGenerator.generate();
    const functionsGenerator = new FunctionsGenerator('functions');
    await functionsGenerator.generate();

    const files = await readdir(path.join(process.cwd(), 'generated'));
 
  
    const typesDeclFile = 'index.d.ts';
    const indexFile = path.join(process.cwd(), 'generated', 'index.ts');
    await writeFile(indexFile, files.map(folder => `export * from './${folder}';`).join('\n'));
    files.push('index.ts');
    await writeFile(path.join(process.cwd(), 'generated', 'tsconfig.json'), tsconfig.replace( '{{files}}', JSON.stringify(files)).replace('{{typesDecl}}', typesDeclFile));
    await writeFile(path.join(process.cwd(), 'generated', typesDeclFile), defs);

}

main()
