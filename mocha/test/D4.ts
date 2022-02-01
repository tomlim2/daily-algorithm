type numsArr = {
  [key: number]: number;
};

const D4 = {
  twoSum(nums: number[], target: number): number[] {
    const comp: numsArr = {};
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      if (comp[nums[i]] >= 0) {
        result.push(Number(comp[nums[i]]));
        result.push(Number(i));
      }
      comp[target - nums[i]] = i;
    }
    return result;
  },
};

export default D4;
