describe('Tests', () => {
    it('parseInt', () => {
        expect(parseInt('one')).toBe(1);
        expect(parseInt('twenty')).toBe(20);
        expect(parseInt('two hundred forty-six')).toBe(246);
    });
});
