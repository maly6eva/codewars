export function shortcut(string: string): string {
    const vowels = /[aeiou]+/g;
    return string.replace(vowels, "");
}
