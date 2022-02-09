// Given an integer array nums, find the contiguous 
// subarray (containing at least one number) which has 
// the largest sum and return its sum. A subarray 
// is a contiguous part of an array.

const D14 = {
  maximumSubarray(nums: number[]): number {
    let cur = 0,
      max = nums[0];
    for (let n of nums) {
      cur += n;
      max = Math.max(max, cur);
      if (cur < 0) cur = 0;
    }
    return max;
  },
};

export default D14;
