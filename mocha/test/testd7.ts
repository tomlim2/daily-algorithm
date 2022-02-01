import D7 from "./D7";
import assert from "assert";

describe("D7", () => {
  describe("Longest Common Prefix", () => {
    it("expect 'pre'", () => {
      //Setup
      const inputs = ["preorder", "prefix"];
      const expectedResult = "pre";

      //Exercise
      const result = D7.longestCommonPrefix(inputs);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("expect 're'", () => {
      //Setup
      const inputs = ["rewrite", "reset", "redo", "restart"];
      const expectedResult = "re";

      //Exercise
      const result = D7.longestCommonPrefix(inputs);

      //Verify
      assert.equal(result, expectedResult);
    });

    it("expect 'extra'", () => {
      // Setup
      const inputs = [
        "extracurricular",
        "extraservice",
        "extraordinary",
        "extramood",
      ];
      const expectedNumber = "extra";

      // Exercise
      const result = D7.longestCommonPrefix(inputs);

      // Verify
      assert.equal(result, expectedNumber);
    });

    it("input ['coexist', 'decode', 'infield'] expect ''", () => {
      // Setup
      const inputs = ["coexist", "decode", "infield"];
      const expectedNumber = "";

      // Exercise
      const result = D7.longestCommonPrefix(inputs);

      // Verify
      assert.equal(result, expectedNumber);
    });

    it("input ['mistake', 'misunderstand', 'misfire'] expect 'mis'", () => {
      // Setup
      const inputs = ["mistake", "misunderstand", "misfire"];
      const expectedNumber = "mis";

      // Exercise
      const result = D7.longestCommonPrefix(inputs);

      // Verify
      assert.equal(result, expectedNumber);
    });
  });
});
