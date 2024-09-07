
export const noop = () => { }

export const tsconfig = `{
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

export const defs = `declare namespace Citizen {
    function invokeNative<T = any>(hash: string, ...args: any[]): T;
}`
