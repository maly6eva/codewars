export function apple(x: string | number): string {
    if (Math.pow(+x, 2) > 1000) {
        return "It's hotter than the sun!!";
    }

    return "Help yourself to a honeycomb Yorkie for the glovebox";
}
