export function getNumberFromString(s: string): number {
    return +s.replace(/\D/g, "");
}
