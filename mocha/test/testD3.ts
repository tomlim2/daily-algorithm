import D3 from "./D3";
import assert from "assert";

describe("D3", () => {
  describe("Factorial", () => {
    it("input 5, and expect 120", () => {
      //Setup
      const inputNember = 5;
      const expectedResult = 120;

      //Exercise
      const result = D3.factorial(inputNember);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
