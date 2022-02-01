import D1 from "./D1";
import assert from "assert";

describe("D1", () => {
  describe("Add", () => {
    it("2+3=5", () => {
      //Setup
      const inputNember1 = 2;
      const inputNember2 = 3;
      const expectedResult = 5;

      //Exercise
      const result = D1.add(inputNember1, inputNember2);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
