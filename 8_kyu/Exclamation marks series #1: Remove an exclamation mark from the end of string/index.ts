export function remove(string: string): string {
    if (string[string.length - 1] === "!") {
        return string.slice(0, string.length - 1);
    }
    return string;
}
