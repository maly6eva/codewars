describe("Tests", () => {
    it("defineSuit", () => {
        expect(defineSuit("Q♠")).toBe("spades");
        expect(defineSuit("9♦")).toBe("diamonds");
        expect(defineSuit("J♥")).toBe("hearts");
    });
});
