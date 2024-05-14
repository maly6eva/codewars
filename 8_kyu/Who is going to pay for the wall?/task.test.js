describe('Tests', () => {
    it('whoIsPaying', () => {
        expect(whoIsPaying("Mexico")).toBe(["Mexico", "Me"]);
        expect(whoIsPaying("Melania")).toBe(["Melania", "Me"]);
        expect(whoIsPaying("Melissa")).toBe(["Melissa", "Me"]);
        expect(whoIsPaying("Me")).toBe(["Me"]);
        expect(whoIsPaying("")).toBe([""]);
        expect(whoIsPaying("I")).toBe(["I"]);
    });
});
