const D10 = {
  removeDuplicatesfromSortedArray(nums: number[]): number {
    let j = 1;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[j - 1]) {
        nums[j] = nums[i];
        j += 1;
      }
    }

    return j;
  },
};

export default D10;
