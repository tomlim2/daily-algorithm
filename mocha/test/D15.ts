const D15 = {
  lengthOfLastWord(str: string): number {
    const trimStr = str.trim();

    return trimStr.slice(trimStr.lastIndexOf(" ") + 1).length;
  },
};

export default D15;
