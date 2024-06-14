import { nameShuffler } from "./index";

describe("Tests", () => {
    it("nameShuffler", () => {
        expect(nameShuffler("john McClane")).toBe("McClane john");
        expect(nameShuffler("Mary jeggins")).toBe("jeggins Mary");
        expect(nameShuffler("tom jerry")).toBe("jerry tom");
    });
});
