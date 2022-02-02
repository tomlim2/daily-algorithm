import D8 from "./D8";
import assert from "assert";

describe("D8", () => {
  describe("Valid Parentheses", () => {
    it("Input '()' expect true", () => {
      //Setup
      const inputs = "()";
      const expectedResult = true;

      //Exercise
      const result = D8.validParentheses(inputs);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input '()[]{}' expect true", () => {
      //Setup
      const inputs = "()[]{}";
      const expectedResult = true;

      //Exercise
      const result = D8.validParentheses(inputs);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input '(]' expect false", () => {
      // Setup
      const inputs = "(]";
      const expectedNumber = false;

      // Exercise
      const result = D8.validParentheses(inputs);

      // Verify
      assert.equal(result, expectedNumber);
    });

    it("input '{{}[][[[]]]}' expect true", () => {
      // Setup
      const inputs = "{{}[][[[]]]}";
      const expectedNumber = true;

      // Exercise
      const result = D8.validParentheses(inputs);

      // Verify
      assert.equal(result, expectedNumber);
    });
  });
});
