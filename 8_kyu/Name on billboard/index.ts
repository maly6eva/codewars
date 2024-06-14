export function billboard(name: string, price: number = 30): number {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
        total += price;
    }
    return total;
}
