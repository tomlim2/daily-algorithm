type romanChart = {
  [key: string]: number;
};

type romanSubtr = {
  [key: string]: number;
};

const romanChart: romanChart = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanSubtraction: romanSubtr = {
  IV: 2,
  IX: 2,
  XL: 20,
  XC: 20,
  CD: 200,
  CM: 200,
};

const romanSubtractKey = Object.keys(romanSubtraction);

const D6 = {
  romanToInteger(roman: string): number {
    let result = 0;
    const romanArr = roman.split("");

    for (let i = 0; i < romanArr.length; i++) {
      let singleRoman = romanArr[i];
      let number = romanChart[singleRoman];

      result += number;
    }

    for (let j = 0; j < romanSubtractKey.length; j++) {
      let singleRoman = romanSubtractKey[j];

      if (roman.includes(singleRoman)) {
        let number = romanSubtraction[singleRoman];

        result -= number;
      }
    }

    return result;
  },
};

export default D6;
