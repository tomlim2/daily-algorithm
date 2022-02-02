const D8 = {
  validParentheses(strArr: string): boolean {
    const mapP = new Map([
      ["(", ")"],
      ["{", "}"],
      ["[", "]"],
    ]);
    let arr = [];
    for (let i = 0; i < strArr.length; i++) {
      arr.push(strArr[i]);
      if (
        arr.length > 1 &&
        mapP.get(arr[arr.length - 2]) === arr[arr.length - 1]
      )
        arr.splice(arr.length - 2, 2);
    }
    return arr.length == 0 ? true : false;
  },
};

export default D8;
