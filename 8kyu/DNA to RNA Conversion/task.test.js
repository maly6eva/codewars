describe('Tests', () => {
    it('DNAtoRNA', () => {
        expect(DNAtoRNA("TTTT")).toBe("UUUU");
        expect(DNAtoRNA("GCAT")).toBe("GCAU");
        expect(DNAtoRNA("GACCGCCGCC")).toBe("GACCGCCGCC");
    });
});
