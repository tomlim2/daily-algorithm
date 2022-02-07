import D12 from "./D12";
import assert from "assert";

describe("D12", () => {
  describe("28. Implement strStr()", () => {
    it("Input 'hello', and 'll'. Expect 2", () => {
      //Setup
      const string1 = "hello";
      const string2 = "ll";
      const expectedResult = 2;

      //Exercise
      const result = D12.implementStrStr(string1, string2);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input 'aaaaa', and 'bba'. Expect -1", () => {
      //Setup
      const string1 = "aaaaa";
      const string2 = "bba";
      const expectedResult = -1;

      //Exercise
      const result = D12.implementStrStr(string1, string2);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Input '', and ''. Expect 0", () => {
      //Setup
      const string1 = "";
      const string2 = "";
      const expectedResult = 0;

      //Exercise
      const result = D12.implementStrStr(string1, string2);

      //Verify
      assert.equal(result, expectedResult);
    });
  });
});
