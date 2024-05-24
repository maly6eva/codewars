export function feast(beast: string, dish:string):string {
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
