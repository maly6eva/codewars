export function greet(name: string, owner: string): string {
    if (name === owner) {
        return "Hello boss";
    } else {
        return "Hello guest";
    }
}
greet("Daniel", "Daniel");
greet("Greg", "Daniel");
