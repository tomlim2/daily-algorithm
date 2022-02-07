const D12 = {
  implementStrStr(haystack: string, needle: string): number {
    let i = 0;
    let j = 0;

    if (needle === "") {
      return 0;
    }

    while (i < haystack.length) {
      if (needle[j] === haystack[i]) {
        j++;
        i++;
      } else {
        i = i - j + 1;
        j = 0;
      }
      if (j >= needle.length) {
        return i - j;
      }
    }
    return -1;
  },
};

export default D12;
