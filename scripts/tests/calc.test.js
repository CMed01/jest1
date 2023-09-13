const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42,31)).toBe(73);
        });
        // Add in other tests for the following
        // Check for nil entries, strings, negative numbers etc
        // Write the code so it will have error messages in the test
    });
    describe("Subtraction function", () => {

    });
    describe("Mutilply function", () => {

    });
    describe("Division function", () => {

    });
})