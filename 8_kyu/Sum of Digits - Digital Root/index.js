function digitalRoot(n) {
    const numberStr = n.toString();
    if (numberStr.length === 1) {
        return n;
    }
    const numberStrArr = numberStr.split("");
    const sumNumber = numberStrArr.reduce((a, b) => a + +b, 0);
    return digitalRoot(sumNumber);
}
