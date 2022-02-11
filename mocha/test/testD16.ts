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
      assert.deepEqual(result, expectedResult);
    });

    it("Input [4,3,2,1]. Expect [4,3,2,2]", () => {
      //Setup
      const input = [4, 3, 2, 1];
      const expectedResult = [4, 3, 2, 2];

      //Exercise
      const result = D16.plusOne(input);

      //Verify
      assert.deepEqual(result, expectedResult);
    });

    it("Input [9]. Expect [1,0]", () => {
      //Setup
      const input = [9];
      const expectedResult = [1, 0];

      //Exercise
      const result = D16.plusOne(input);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
