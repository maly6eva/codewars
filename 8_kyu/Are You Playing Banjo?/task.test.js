describe("Tests", () => {
    it("areYouPlayingBanjo", () => {
        expect(areYouPlayingBanjo("Adam")).toBe("Adam does not play banjo");
        expect(areYouPlayingBanjo("Paul")).toBe("Paul does not play banjo");
        expect(areYouPlayingBanjo("Ringo")).toBe("Ringo plays banjo");
        expect(areYouPlayingBanjo("bravo")).toBe("bravo does not play banjo");
        expect(areYouPlayingBanjo("rolf")).toBe("rolf plays banjo");
    });
});
