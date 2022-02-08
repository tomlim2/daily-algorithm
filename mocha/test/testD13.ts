import D13 from "./D13";
import assert from "assert";

describe("D13", () => {
  describe("35. Search Insert Position", () => {
    it("Input [1,3,5,6], and target 2. Expect 1", () => {
      //Setup
      const input = [1, 3, 5, 6];
      const target = 2;
      const expectedResult = 1;

      //Exercise
      const result = D13.searchInsertPosition(input, target);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input [1,3,5,6], and target 2. Expect 5", () => {
      //Setup
      const input = [1, 3, 5, 6];
      const target = 5;
      const expectedResult = 2;

      //Exercise
      const result = D13.searchInsertPosition(input, target);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input [1,3,5,6], and target 7. Expect 4", () => {
      //Setup
      const input = [1, 3, 5, 6];
      const target = 7;
      const expectedResult = 4;

      //Exercise
      const result = D13.searchInsertPosition(input, target);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
