import { stringToNumber } from "./index";

describe("Tests", () => {
    it("stringToNumber", () => {
        expect(stringToNumber("1234")).toBe(1234);
        expect(stringToNumber("605")).toBe(605);
        expect(stringToNumber("1405")).toBe(1405);
        expect(stringToNumber("-7")).toBe(-7);
    });
});
