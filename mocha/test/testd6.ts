import D6 from "./D6";
import assert from "assert";

describe("D6", () => {
  describe("Roman to Integer", () => {
    it("expect 3", () => {
      //Setup
      const inputs = "III";
      const expectedResult = 3;

      //Exercise
      const result = D6.romanToInteger(inputs);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("expect 58", () => {
      //Setup
      const inputs = "LVIII";
      const expectedResult = 58;

      //Exercise
      const result = D6.romanToInteger(inputs);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("expect 1994", () => {
      // Setup
      const inputs = "MCMXCIV";
      const expectedNumber = 1994;

      // Exercise
      const result = D6.romanToInteger(inputs);

      // Verify
      assert.equal(result, expectedNumber);
    });
  });
});
