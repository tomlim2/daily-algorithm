const D16 = {
  plusOne(digits: number[]): number[] {
    const digitsArray = digits.join("");
    const arrToInt = BigInt(digitsArray);
    const plusone = arrToInt + 1n;
    const plusoneResult = Array.from(String(plusone), Number);

    return plusoneResult;
  },
};

export default D16;
