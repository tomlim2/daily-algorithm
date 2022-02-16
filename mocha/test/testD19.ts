import D19 from "./D19";
import assert from "assert";

describe("D19", () => {
  describe("70. Climbing Stairs; You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?", () => {
    it("Input 2. Expect 2", () => {
      //Setup
      const input = 2;
      const expectedResult = 2;

      //Exercise
      const result = D19.climbStairs(input);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
    it("Input 3. Expect 3", () => {
      //Setup
      const input = 3;
      const expectedResult = 3;

      //Exercise
      const result = D19.climbStairs(input);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
