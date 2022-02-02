import D9 from "./D9";
import assert from "assert";

describe("D9", () => {
  describe("Merge Two Sorted Lists", () => {
    it("Input [1, 2, 4], and [1, 3, 4] expect [1, 1, 2, 3, 4, 4]", () => {
      //Setup
      const inputList1 = [1, 2, 4];
      const inputList2 = [1, 3, 4];
      const expectedResult = [1, 1, 2, 3, 4, 4];

      //Exercise
      const result = D9.mergeTwoSortedLists(inputList1, inputList2);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
    
    it("Input [], and [] expect []", () => {
      //Setup
      const inputList1: any = [];
      const inputList2: any = [];
      const expectedResult: any = [];

      //Exercise
      const result = D9.mergeTwoSortedLists(inputList1, inputList2);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
