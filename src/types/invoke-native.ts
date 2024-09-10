declare const Citizen: {
    invokeNative<T>(hash: string, ...args: unknown[]): T;
    resultAsVector(): void;
}

export const invokeNative = <T>(hash: string, ...args: unknown[]): T => {
    return Citizen.invokeNative(hash, ...args);
}

export const resultAsVector = (): () => void => {
    return Citizen.resultAsVector;
}