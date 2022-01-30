const D5 = require("./D5");
const assert = require("assert");

describe("Calculate", () => {
  describe(".D5", () => {
    it("121 reads as 121 from left to right and from right to left", () => {
      //Setup
      const inputNember = 121;
      const expectedResult = true;

      //Exercise
      const result = D5.isPalindrome(inputNember);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("rFrom left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.", () => {
      //Setup
      const inputNember = -121;
      const expectedResult = false;

      //Exercise
      const result = D5.isPalindrome(inputNember);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("Reads 01 from right to left. Therefore it is not a palindrome.", () => {
      // Setup
      const inputNumber = 10;
      const expectedNumber = false;

      // Exercise
      const result = D5.isPalindrome(inputNumber);

      // Verify
      assert.equal(result, expectedNumber);
    });
  });
});
