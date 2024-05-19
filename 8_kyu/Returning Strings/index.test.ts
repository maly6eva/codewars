import { greet_phrase } from "./index";

describe("Tests", () => {
    it("greet_phrase", () => {
        expect(greet_phrase("Ryan")).toBe("Hello, Ryan how are you doing today?");
        expect(greet_phrase("Shingles")).toBe("Hello, Shingles how are you doing today?");
    });
});
