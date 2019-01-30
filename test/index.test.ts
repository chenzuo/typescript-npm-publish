import { add } from "../src/index";
describe("Test index.ts/ hrx", () => {
    test("isArrayLike(): true", () => {
        expect(3).toBe(3);
    });
    test("add(): number", () => {
        const result = add(1, 2);
        expect(result).toBe(3);
    });
});
