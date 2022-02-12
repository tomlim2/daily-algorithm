const D17 = {
  addBinary: function (a: string, b: string): string {
    let maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");

    let d = 0;
    let output = "";
    for (let i = a.length - 1; i >= 0; i--) {
      let sum = +a[i] + +b[i] + d;
      d = ~~(sum / 2);
      output = (sum % 2) + output;
    }
    return d ? 1 + output : output;
  },
};

export default D17;
