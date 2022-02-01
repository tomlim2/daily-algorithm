const D3 = {
  factorial(inputNumber: number): number {
    if (inputNumber === 0) {
      return 1;
    }

    for (let i = inputNumber - 1; i >= 1; i--) {
      inputNumber *= i;
    }
    return inputNumber;
  },
};

export default D3;
