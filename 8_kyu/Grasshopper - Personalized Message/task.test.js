describe('Tests', () => {
    it('greet', () => {
        expect(greet('Daniel', 'Daniel')).toBe('Hello boss');
        expect(greet('Greg', 'Daniel')).toBe('Hello guest');
    });
});
