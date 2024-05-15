import { getNumberFromString } from "./index";

describe("Tests", () => {
    it("getNumberFromString", () => {
        expect(getNumberFromString("1")).toBe(1);
        expect(getNumberFromString("123")).toBe(123);
        expect(getNumberFromString("this is number: 7")).toBe(7);
    });
});
