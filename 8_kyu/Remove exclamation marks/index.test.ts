import { removeExclamationMarks } from "./index";

describe("Tests", () => {
    it("removeExclamationMarks", () => {
        expect(removeExclamationMarks("Hello World!")).toBe("Hello World");
    });
});
