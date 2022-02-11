const D16 = {
  plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
      if (++digits[i] == 10) {
        digits[i] = 0;
        if (!i) digits.unshift(1);
      } else break;
    }
    return digits;
  },
};

export default D16;
