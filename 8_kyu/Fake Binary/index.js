function fakeBin(x) {
    let str = "";
    for (let i = 0; i < x.length; i++) {
        if (Number(x[i]) <= 4) {
            str += "0";
        } else if (Number(x[i]) >= 5) {
            str += "1";
        }
    }
    return str;
}
