import D17 from "./D17";
import assert from "assert";

describe("D17", () => {
  describe("66. Plus One", () => {
    it("Input [1,2,3]. Expect [1,2,4]", () => {
      //Setup
      const input1 = "11";
      const input2 = "1";
      const expectedResult = "100";

      //Exercise
      const result = D17.addBinary(input1, input2);

      //Verify
      assert.deepEqual(result, expectedResult);
    });
  });
});
