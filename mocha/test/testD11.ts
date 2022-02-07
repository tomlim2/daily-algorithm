import D11 from "./D11";
import assert from "assert";

describe("D11", () => {
  describe("27. Remove Element", () => {
    it("Input [3, 2, 2, 3], and target number 3. Expect 2", () => {
      //Setup
      const inputList = [3, 2, 2, 3];
      const inputNumber = 3;
      const expectedResult = 2;

      //Exercise
      const result = D11.removeElement(inputList, inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input [0, 1, 2, 2, 3, 0, 4, 2], and target number 2. Expect 5", () => {
      //Setup
      const inputList = [0, 1, 2, 2, 3, 0, 4, 2];
      const inputNumber = 2;
      const expectedResult = 5;

      //Exercise
      const result = D11.removeElement(inputList, inputNumber);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
