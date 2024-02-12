function greet (name, owner) {
    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}
greet('Daniel', 'Daniel');
greet('Greg', 'Daniel');
