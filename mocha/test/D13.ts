const D13 = {
  searchInsertPosition(nums: number[], target: number): number {
    if (nums[nums.length - 1] < target) {
      return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target && nums[i - 1] < target) {
        return nums.slice(0, i).length;
      }
    }
    return 0;
  },
};

export default D13;
