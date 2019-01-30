"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe("Test index.ts/ hrx", () => {
    test("isArrayLike(): true", () => {
        expect(3).toBe(3);
    });
    test("add(): number", () => {
        const result = index_1.add(1, 2);
        expect(result).toBe(3);
    });
});
//# sourceMappingURL=index.test.js.map