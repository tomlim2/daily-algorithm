import D20 from "./D20";
import assert from "assert";

describe("D20", () => {
  describe("70. Climbing Stairs; You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?", () => {
    it("Input [1,1,2]. Expect [1,2]", () => {
      //Setup
      const input = [1, 1, 2];
      const expectedResult = [1, 2];

      //Exercise
      const result = D20.removeDuplicatesfromSortedList(input);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
    it("Input [1,1,2,3,3]. Expect [1,2,3]", () => {
      //Setup
      const input = [1, 1, 2, 3, 3];
      const expectedResult = [1, 2, 3];

      //Exercise
      const result = D20.removeDuplicatesfromSortedList(input);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
