const D19 = {
  climbStairs: function (n: number): number {
    const arr = new Array(n + 1)
    
    arr[0] = 0
    arr[1] = 1
    arr[2] = 2
    
    for (let i = 3; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    
    return arr[n]
  },
};

export default D19;
