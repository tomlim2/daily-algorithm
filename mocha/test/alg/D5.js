const D5 = {
  isPalindrome(inputNumber) {
    return String(inputNumber) ==
      String(inputNumber).split("").reverse().join("")
      ? true
      : false;
  },
};

module.exports = D5;
