const D7 = {
  longestCommonPrefix(strArr: string[]): string {
    const arr = [];
    const prefix = strArr[0];
    if (prefix === undefined) return "";

    for (let i = 1; i < strArr.length; i++) {
      for (let j = 0; j < prefix.length; j++) {
        if (prefix[j] === strArr[i][j] && prefix[j + 1] === undefined) {
          arr.push(j + 1);
          break;
        } else if (prefix[j] !== strArr[i][j]) {
          arr.push(j);
          break;
        }
      }
    }
    return prefix.slice(0, Math.min(...arr));
  },
};

export default D7;
