describe("Tests", () => {
    it("correctPolishLetters", () => {
        expect(correctPolishLetters("Jędrzej Błądziński")).toBe("Jedrzej Bladzinski");
        expect(correctPolishLetters("Lech Wałęsa")).toBe("Lech Walesa");
        expect(correctPolishLetters("Maria Skłodowska-Curie")).toBe("Maria Sklodowska-Curie");
    });
});
