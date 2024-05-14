describe("Tests", () => {
    it("smash", () => {
        expect(smash(["hello", "world"])).toBe("hello world");
        expect(smash(["hello", "amazing", "world"])).toBe("hello amazing world");
        expect(smash(["this", "is", "a", "really", "long", "sentence"])).toBe("this is a really long sentence");
    });
});
