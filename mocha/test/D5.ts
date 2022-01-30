const D5 = {
  isPalindrome(inputNumber:number):boolean {
    return String(inputNumber) ==
      String(inputNumber).split("").reverse().join("")
      ? true
      : false;
  },
};

export default D5;
