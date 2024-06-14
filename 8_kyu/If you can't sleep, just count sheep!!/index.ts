export function countSheep(num: number): string {
    let sheep = "";
    for (let i = 1; i <= num; i++) {
        sheep += `${i} sheep...`;
    }
    return sheep;
}
