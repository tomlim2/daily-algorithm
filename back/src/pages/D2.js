const D1 = ({ a, b }) => {
  const d1 = (n1, n2) => {
    return n1 - n2;
  };
  return <div>{d1(a, b)}</div>;
};

export default D1;
