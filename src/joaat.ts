export const joaatSigned = (key: string): number => {
    const keyLowered = key.toLowerCase();
    const length = keyLowered.length;
    let hash, i;
  
    for (hash = i = 0; i < length; i++) {
      hash += keyLowered.charCodeAt(i);
      hash += hash << 10;
      hash ^= hash >>> 6;
    }
  
    hash += hash << 3;
    hash ^= hash >>> 11;
    hash += hash << 15;
  
    return hash;
  };
  
  export function toUnsigned(value: number): number {
    return value >>> 0;
  }
  
  export const joaat = (str: string): number => {
    return toUnsigned(joaatSigned(str));
  };
  
  joaat.zero = joaat('0');
  
  