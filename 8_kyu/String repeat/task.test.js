describe("Tests", () => {
    it("repeatStr", () => {
        expect(repeatStr(3, "*")).toBe("***");
        expect(repeatStr(5, "#")).toBe("#####");
        expect(repeatStr(2, "ha ")).toBe("ha ha ");
    });
});
