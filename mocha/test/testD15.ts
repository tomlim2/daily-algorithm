import D15 from "./D15";
import assert from "assert";

describe("D15", () => {
  describe("58. Length of Last Word", () => {
    it("Input Hello World. Expect 5", () => {
      //Setup
      const input = "Hello World";
      const expectedResult = 5;

      //Exercise
      const result = D15.lengthOfLastWord(input);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input '   fly me   to   the moon  '. Expect 4", () => {
      //Setup
      const input = "   fly me   to   the moon  ";
      const expectedResult = 4;

      //Exercise
      const result = D15.lengthOfLastWord(input);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input 'luffy is still joyboy'. Expect 23", () => {
      //Setup
      const input = "luffy is still joyboy";
      const expectedResult = 6;

      //Exercise
      const result = D15.lengthOfLastWord(input);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
