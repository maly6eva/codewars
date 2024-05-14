export function duplicateCount(text: string): number {
    const str = text.toUpperCase().split("").sort().join("");
    const arr = str.match(/(.)\1+/g);

    if (arr === null) {
        return 0;
    } else {
        return arr.length;
    }
}
