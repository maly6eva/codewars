import { fakeBin } from "./index";

describe("Tests", () => {
    it("fakeBin", () => {
        expect(fakeBin("45385593107843568")).toBe("01011110001100111");
        expect(fakeBin("509321967506747")).toBe("101000111101101");
        expect(fakeBin("366058562030849490134388085")).toBe("011011110000101010000011011");
    });
});
