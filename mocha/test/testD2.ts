import D2 from "./D2";
import assert from "assert";

describe("D2", () => {
  describe("Subtraction", () => {
    it("3-2=1", () => {
      //Setup
      const inputNember1 = 3;
      const inputNember2 = 2;
      const expectedResult = 1;

      //Exercise
      const result = D2.subtraction(inputNember1, inputNember2);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
