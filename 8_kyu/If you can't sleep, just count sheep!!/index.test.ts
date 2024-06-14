import { countSheep } from "./index";
describe("Tests", () => {
    it("countSheep", () => {
        expect(countSheep(0)).toBe("");
        expect(countSheep(1)).toBe("1 sheep...");
        expect(countSheep(2)).toBe("1 sheep...2 sheep...");
        expect(countSheep(3)).toBe("1 sheep...2 sheep...3 sheep...");
    });
});
