export function doubleChar(str: string): string {
    let doubleString = "";
    for (let i = 0; i < str.length; i++) {
        doubleString += str[i] + str[i];
    }
    return doubleString;
}
