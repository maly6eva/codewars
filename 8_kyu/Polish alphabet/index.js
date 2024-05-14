function correctPolishLetters(string) {
    let diacrit = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" };
    return string.replace(/[ąćęłńóśźż]/g, (match) => diacrit[match]);
}
