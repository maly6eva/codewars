function strCount(str, letter) {
    let letterCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}
