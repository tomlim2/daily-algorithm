const D11 = {
  removeElement(nums: number[], targetNumber: number): number {
    let result = nums.filter((num) => num !== targetNumber);

    return result.length
  },
};

export default D11;
