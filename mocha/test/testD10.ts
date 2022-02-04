import D10 from "./D10";
import assert from "assert";

describe("D10", () => {
  describe("26. Remove Duplicates from Sorted Array", () => {
    it("Input [1,1,2], and expect 2", () => {
      //Setup
      const inputList = [1, 1, 2];
      const expectedResult = 2;

      //Exercise
      const result = D10.removeDuplicatesfromSortedArray(inputList);

      //Verify
      assert.deepEqual(result, expectedResult);
    });

    it("Input [0,0,1,1,1,2,2,3,3,4], and expect 5", () => {
      //Setup
      const inputList = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
      const expectedResult = 5;

      //Exercise
      const result = D10.removeDuplicatesfromSortedArray(inputList);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
