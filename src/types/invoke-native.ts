declare const Citizen: {
    invokeNative<T>(hash: string, ...args: unknown[]): T;
}

export const invokeNative = <T>(hash: string, ...args: unknown[]): T => {
    return Citizen.invokeNative(hash, ...args);
}