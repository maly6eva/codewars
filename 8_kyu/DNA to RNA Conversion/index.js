const DNA = "GCAT";
const DNAtoRNA = (DNA) => {
    let res = "";
    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] === "T") {
            res += "U";
        } else {
            res += DNA[i];
        }
    }
    return res;
};
console.log(DNAtoRNA(DNA));
