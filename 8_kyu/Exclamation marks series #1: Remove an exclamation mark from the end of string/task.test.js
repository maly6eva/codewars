describe("Tests", () => {
    it("doTest", () => {
        expect(doTest("Hi!", "Hi")).toBe();
        expect(doTest("Hi!!!", "Hi!!")).toBe();
        expect(doTest("!Hi", "!Hi")).toBe();
        expect(doTest("!Hi!", "!Hi")).toBe();
        expect(doTest("Hi! Hi!", "Hi! Hi")).toBe();
        expect(doTest("Hi", "Hi")).toBe();
    });
});
