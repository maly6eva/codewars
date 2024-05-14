describe('Tests', () => {
    it('uniqueInOrder', () => {
        expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);
    });
});
