import { remove } from "./index";

describe("Tests", () => {
    it("remove", () => {
        expect(remove("Hi!")).toBe("Hi");
        expect(remove("Hi!!!")).toBe("Hi!!");
        expect(remove("!Hi")).toBe("!Hi");
        expect(remove("!Hi!")).toBe("!Hi");
        expect(remove("Hi! Hi!")).toBe("Hi! Hi");
        expect(remove("Hi")).toBe("Hi");
    });
});
