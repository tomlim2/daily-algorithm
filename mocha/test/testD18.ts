import D18 from "./D18";
import assert from "assert";

describe("D18", () => {
  describe("69. Sqrt(x)", () => {
    it("Input 4. Expect 2", () => {
      //Setup
      const input = 4;
      const expectedResult = 2;

      //Exercise
      const result = D18.sqrt(input);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input 8. Expect 2", () => {
      //Setup
      const input = 8;
      const expectedResult = 2;

      //Exercise
      const result = D18.sqrt(input);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
