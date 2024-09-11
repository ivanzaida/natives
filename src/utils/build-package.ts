import { log } from "console";
import { readFileSync } from "fs";
import { RELEASING_ORG } from "../const";

export const buildProjectPath = (name: string) => `${RELEASING_ORG}/${name}`;

const parentPackageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

export const buildPackageJson = (name: string, localDeps: string[] = []): Object => {
    const packageJson: any = {
        version: parentPackageJson.version,
        name: `${RELEASING_ORG}/${name}`,
        author: parentPackageJson.author,
        main: 'dist/index.js',
        scripts: {
            "build": "tsc"
        },
        dependencies: {},
        devDependencies: {
            typescript: parentPackageJson.devDependencies.typescript,
        },
    }

    if (localDeps.length) {
        const version = parentPackageJson.version;
        for (const dep of localDeps) {
            packageJson.dependencies[buildProjectPath(dep)] = version;
        }
    }

    return packageJson;
}

export const buildTsConfig = (types: string[] = []): any => {
    return {
        "compilerOptions": {
            "lib": ["ES6", "ES2021"],
            "downlevelIteration": true,
            "module": "commonjs",
            "incremental": true,
            "allowJs": false,
            "moduleResolution": "node",
            "target": "esnext",
            "resolveJsonModule": true,
            "esModuleInterop": true,
            "removeComments": false,
            "preserveConstEnums": true,
            "sourceMap": true,
            "baseUrl": "./src",
            "skipLibCheck": true,
            "sourceRoot": "./src",
            "outDir": "./dist",
            "declaration": true,
            "typeRoots": types,
        },
        "exclude": ["node_modules"]
    }
}


export const buildMonorepoPackageJson = (projects: string[]) => {
    const packageJson = {
        version: parentPackageJson.version,
        name: `${RELEASING_ORG}/root`,
        author: parentPackageJson.author,
        private: true,
        workspaces: projects,
    }

    return packageJson;
}


export const buildFivemTypes = () => {
    const buffer: string[] = [];
    buffer.push('interface CitizenInterface {')
    buffer.push('\tinvokeNative<T = void>(hash: string, ...args: unknown[]): T')
    buffer.push('\tresultAsVector(): unknown')
    buffer.push('\tresultAsObject(): unknown')
    buffer.push('}')
    buffer.push('')
    buffer.push('declare const Citizen: CitizenInterface;')

    return buffer.join('\n');
}