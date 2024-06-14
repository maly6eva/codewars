import { strCount } from "./index";

describe("Tests", () => {
    it("strCount", () => {
        expect(strCount("Hello", "o")).toBe(1);
        expect(strCount("Hello", "l")).toBe(2);
        expect(strCount("", "z")).toBe(0);
    });
});
