import { joinStrings } from "./index";

describe("Tests", () => {
    it("joinStrings", () => {
        expect(joinStrings("string1", "string2")).toBe("string1 string2");
        expect(joinStrings("testing", "testing")).toBe("testing testing");
        expect(joinStrings(134, 234)).toBe("134 234");
    });
});
