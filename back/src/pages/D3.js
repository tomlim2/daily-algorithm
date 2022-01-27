const D3 = ({ a}) => {
  function factorial(inputNumber){

    if (inputNumber === 0){
      return 1;
    }

    for (let i = inputNumber-1; i>= 1; i--){
      inputNumber *= i
    }
    return inputNumber;
  }
  return <div>{factorial(a)}</div>;
};

export default D3;
