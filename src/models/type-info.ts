type TNativeType = {
    nativeName: string;
    runtimeName: string;
}

export type TTypeInfo = TNativeType & {
    fileName: string;
    folder: string;
    project: string;
}