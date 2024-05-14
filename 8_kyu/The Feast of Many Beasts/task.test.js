describe('Tests', () => {
    it('feast', () => {
        expect(feast("great blue heron", "garlic naan")).toBeTrue();
        expect(feast("chickadee", "chocolate cake")).toBeTrue();
        expect(feast("brown bear", "bear claw")).toBeFalse();
    });
});
