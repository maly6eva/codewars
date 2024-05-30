export function secondSymbol(s: string, symbol: string): number {
    let str = s.indexOf(symbol);
    if (str === -1) {
        return -1;
    }
    let str2 = s.indexOf(symbol, str + 1);
    if (str2 === -1) {
        return -1;
    }
    return str2;
}
