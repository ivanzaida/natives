import { log } from "console";
import { TypeResolver } from "../utils/type-resolver";
import { TTypeInfo } from "./type-info";
import { TStructField } from "../utils/md-parser";
import { NATIVE_STRUCT_TYPE, NATIVE_UNKNOWN_TYPE, NATIVE_VECTOR_TYPE } from "../const";
import { Vector3Ref } from "../types";

export type TFuncParam = { field: TStructField, type: TTypeInfo };
export type TFunReturnType = TTypeInfo & { name: string, isArray: boolean, comment?: string };

export class Native {
    public readonly currentFolder: string;
    public readonly namespace: string;
    public readonly name: string;
    public readonly nativeName: string;
    public readonly hash: string;
    public readonly parameters: TFuncParam[] = [];
    public readonly returnType: TFunReturnType;
    public readonly notes: string[] = [];
    public readonly currentProject: string;


    constructor(currentProject: string, currentFolder: string, namespace: string, nativeName: string, name: string, hash: string, parameters: TFuncParam[], returnType: TFunReturnType, notes: string[]) {
        this.currentFolder = currentFolder;
        this.name = name;
        this.nativeName = nativeName;
        this.hash = hash;
        this.parameters = parameters;
        this.returnType = returnType;
        this.namespace = namespace;
        this.notes = notes;
        this.currentProject = currentProject;
    }

    public getSignature(): string {
        const params = this._getRealParams().map((x, i) => `field_${i}` + ': ' + x.type.runtimeName);
        const returnType = this.returnType.runtimeName;
        return `function ${this.name}(${params.join(', ')}): ${returnType}`;
    }

    public compile(): string {
        const buffer: string[] = [];
        const realParams = this._getRealParams();
        this._resolveImports(buffer, realParams);
        const acceptingParameters: string[] = [];
        const passParameters: string[] = [];
        const preRuns: string[] = [];
        const postRuns: string[] = [];

        realParams.forEach((param, idx) => {
            const paramName = param.field.name;
            const paramType = param.type.runtimeName;

            let compiledName = `${paramName}: ${paramType}`;

            if (TypeResolver.isEnum(param.type.nativeName)) {
                compiledName += ' | number';
            }

            if (param.field.isPointer) {
                compiledName += ' /* ptr */';
                if (TypeResolver.isStruct(param.type.nativeName) || TypeResolver.isGenerated(param.type.nativeName)) {
                    if (param.type.nativeName === NATIVE_VECTOR_TYPE.toLocaleLowerCase()) {
                        const vectorPtr = TypeResolver.getType(Vector3Ref.name)!;
                        preRuns.push(`const ${paramName}Ptr = new ${vectorPtr.runtimeName}();`);
                        passParameters.push(`${paramName}Ptr.dataView`);
                        postRuns.push(`${paramName}Ptr.copyToVector(${paramName});`);
                    } else {
                        passParameters.push(`${paramName}.dataView`);
                    }
                } else {
                    passParameters.push(paramName);
                }
            } else {
                passParameters.push(paramName);
            }

            if (param.field.defaultValue) {
                compiledName += ` = ${param.field.defaultValue}`;
            }

            acceptingParameters.push(compiledName);
        });

        let returnType = this.returnType.runtimeName;

        if (this.returnType.isArray) {
            returnType += '[]';
        }

        const returnsVector = this.returnType === TypeResolver.getType(NATIVE_VECTOR_TYPE);

        const funcName = this.name.startsWith('0x') ? `n_${this.name}` : this.name;
        this._buildComments(realParams, buffer);
        buffer.push(`export function ${funcName}(${acceptingParameters.join(', ')}): ${returnType} {`);

        let returnSignature = returnType;
        let returnTransformation = '';
        const resultVar = `${funcName}_result`;


        if (returnsVector) {
            returnSignature = '[number, number, number]';
            passParameters.push('Citizen.resultAsVector()');
            returnTransformation = `Vector3.fromArray(${resultVar})`;
        }

        if (this.returnType.isArray) {
            passParameters.push('Citizen.resultAsObject()');
        }



        buffer.push(...preRuns.map(x => `\t${x}`));
        buffer.push(`\tconst ${resultVar} = Citizen.invokeNative<${returnSignature}>('${this.hash}', ${passParameters.join(', ')});`);
        buffer.push(...postRuns.map(x => `\t${x}`));
        if (returnTransformation) {
            buffer.push(`\treturn ${returnTransformation};`);
        } else {
            buffer.push(`\treturn ${resultVar};`);
        }
        buffer.push('}');

        return buffer.join('\n');
    }

    private _buildComments(realParams: TFuncParam[], buffer: string[]): void {
        buffer.push(`/**`);
        buffer.push(` * ${this.namespace}:${this.nativeName}`)
        buffer.push(` *`)
        buffer.push(` * ${this.hash}`);
        buffer.push('\r')

        const commentsBuffer: string[] = [];


        if (this.notes.length) {
            this.notes.forEach(note => {
                commentsBuffer.push(note);
            });
        }


        commentsBuffer.push('');
        commentsBuffer.push('------------------------------------------------------------------');
        realParams.forEach(param => {
            let fieldText = `@param {${param.type.runtimeName}} ${param.field.name}`;

            if (param.field.comment) {
                fieldText += ` ${param.field.comment}`;
            }

            if (param.field.isPointer) {
                fieldText += ' [Ref]';
            }
            commentsBuffer.push(fieldText);
        });

      
        buffer.push(commentsBuffer.map(x => ` * ${x.replace(/\*/g, '')}`).join('\n\r'));

        if (this.returnType.runtimeName !== 'void') {
            const name = this.returnType.name ?? 'returnValue';
            const comment = this.returnType.comment ?? '';
            let str = ` * @returns {${this.returnType.runtimeName}} ${name} ${comment}`;
            buffer.push(str);
        }
        buffer.push(' */')
    }

    private _resolveImports(buffer: string[], parameters: TFuncParam[]): void {
        const imports = TypeResolver.resolveImports(this.currentProject, this.currentFolder, parameters.map(x => x.type).concat(this.returnType).map(x => x.nativeName));
        const hasVector = parameters.some(x => x.type.nativeName === NATIVE_VECTOR_TYPE.toLowerCase());

        if (hasVector) {
            const vecPtr = Vector3Ref.name;
            if (!TypeResolver.getType(vecPtr)) {
                throw new Error(`Type ${vecPtr} not found`);
            }
            const path = TypeResolver.resolveImport(this.currentProject, this.currentFolder, TypeResolver.getType(vecPtr)!)!;
            imports.push(`import { ${vecPtr} } from '${path}';`);
        }

        if (imports.length) {
            buffer.push(...new Set(imports));
            buffer.push('');
        }
    }

    private _parseReserved(name: string): string {
        switch (name) {
            case 'true':
                return 'flag';
            case 'default':
                return 'defaultValue';
            case 'package':
                return 'pkg';
            default:
                return name;
        }
    }


    private static readonly _ignoredTypes = new Set<string>([NATIVE_VECTOR_TYPE, NATIVE_STRUCT_TYPE, NATIVE_UNKNOWN_TYPE].map(x => x.toLowerCase()));

    private _getRealParams(): TFuncParam[] {
        return this.parameters.map(param => {
            param.field = { ...param.field, name: this._parseReserved(param.field.name) };

            if (!param.field.isPointer) {
                return param;
            }

            if (Native._ignoredTypes.has(param.type.nativeName.toLowerCase())) {
                return param;
            }

            if (TypeResolver.isStruct(param.type.nativeName)) {
                return param;
            }

            let typeName = TypeResolver.getAlias(param.type.nativeName);

            const isString = TypeResolver.isStringType(typeName);
            if (isString) {
                typeName = 'string*';
            } else {
                typeName = typeName + '*';
            }

            const type = TypeResolver.getType(typeName);

            if (!type) {
                throw new Error(`Type ${typeName} not found`);
            }



            return { field: param.field, type: type! };
        })
    }
}