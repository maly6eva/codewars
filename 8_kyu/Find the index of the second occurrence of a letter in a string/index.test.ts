import { secondSymbol } from "./index";

describe("Tests", () => {
    it("example", () => {
        expect(secondSymbol("Hello world!!!", "l")).toBe(3);
        expect(secondSymbol("Hello world!!!", "o")).toBe(7);
        expect(secondSymbol("Hello world!!!", "A")).toBe(-1);
        expect(secondSymbol("", "q")).toBe(-1);
        expect(secondSymbol("Hello", "!")).toBe(-1);
    });
});
