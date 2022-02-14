const D18 = {
  sqrt: function (x: number): number {
    if (x <= 1) return x;
    let l = 0;
    let r = x;
    while (l < r - 1) {
      let middle = Math.floor((l + r) / 2);
      let val = middle * middle;
      if (val == x) return middle;
      if (val > x) r = middle;
      else l = middle;
    }
    return l;
  },
};

export default D18;
