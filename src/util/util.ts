export const textDecoder = new TextDecoder('utf-8');

export function getObjKeyByValue(val: any, obj: any): string {
    for (let key in obj) {
        if(obj[key] === val) {
            return key;
        }
    }
    return null;
}

export function intTo2Byte(val: number) {
    const byte1 = val & 0x7F;
    const byte2 = val >> 7;
    return Uint8Array.from([byte1, byte2]);
}

export function bytes2ToInt(bytes: Uint8Array) {
    return (bytes[0] & 0x7F) << 7 | bytes[1];
}

export function parameterValueBytesToInt(byteArray) {
    return (byteArray[0] & 0x7F) | ((byteArray[1] & 0x7F)<<7) | ((byteArray[2] & 0x7F)<<14);
}

export function parameterValueIntToBytes(value: number) {
    const byte1 = value & 0x7F;
    const byte2 = (value >> 7) & 0x7F;
    const byte3 = (value >> 14) & 0x7F;
    return Uint8Array.from([byte1, byte2, byte3]);
}

export function clampValue(val: number, range: [number, number], step: number) {
    let value = Math.min(Math.max(range[0], val), range[1]);
    if (step && value % step > 0) {
        value = value - value % step;
    }
    return value;
}