describe('Tests', () => {
    it('shortcut', () => {
        expect(shortcut('hello')).toBe('hll');
        expect(shortcut('how are you today?')).toBe('hw r y tdy?');
        expect(shortcut('complain')).toBe('cmpln');
        expect(shortcut('never')).toBe('nvr');
    });
});
