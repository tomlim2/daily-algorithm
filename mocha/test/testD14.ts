import D14 from "./D14";
import assert from "assert";

describe("D14", () => {
  describe("53. Maximum Subarray", () => {
    it("Input [-2,1,-3,4,-1,2,1,-5,4]. Expect 1", () => {
      //Setup
      const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      const expectedResult = 6;

      //Exercise
      const result = D14.maximumSubarray(input);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input [1]. Expect 1", () => {
      //Setup
      const input = [1];
      const expectedResult = 1;

      //Exercise
      const result = D14.maximumSubarray(input);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input [5,4,-1,7,8]. Expect 23", () => {
      //Setup
      const input = [5, 4, -1, 7, 8];
      const expectedResult = 23;

      //Exercise
      const result = D14.maximumSubarray(input);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
