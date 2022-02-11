import D16 from "./D16";
import assert from "assert";

describe("D16", () => {
  describe("66. Plus One", () => {
    it("Input [1,2,3]. Expect [1,2,4]", () => {
      //Setup
      const input = [1, 2, 3];
      const expectedResult = [1, 2, 4];

      //Exercise
      const result = D16.plusOne(input);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
