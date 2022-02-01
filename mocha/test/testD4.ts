import D4 from "./D4";
import assert from "assert";

describe("D4", () => {
  describe("twoSum", () => {
    it("input [2, 7, 11, 15] and target 9, expect [0, 1]", () => {
      //Setup
      const inputNembers = [2, 7, 11, 15];
      const target = 9;
      const expectedResult = [0, 1];

      //Exercise
      const result = D4.twoSum(inputNembers, target);

      //Verify
      assert.deepEqual(result, expectedResult);
    });

    it("input [3, 2, 4] and target 6, expect [1, 2]", () => {
      //Setup
      const inputNembers = [3, 2, 4];
      const target = 6;
      const expectedResult = [1, 2];

      //Exercise
      const result = D4.twoSum(inputNembers, target);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
