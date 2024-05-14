import { dnaToRna } from "./index";

describe("Tests", () => {
    it("DNAtoRNA", () => {
        expect(dnaToRna("TTTT")).toBe("UUUU");
        expect(dnaToRna("GCAT")).toBe("GCAU");
        expect(dnaToRna("GACCGCCGCC")).toBe("GACCGCCGCC");
    });
});
