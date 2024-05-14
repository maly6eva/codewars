export function abbrevName(name: string) {
    return name
        .toUpperCase()
        .split(" ")
        .map((x) => x[0])
        .join(".");
}
