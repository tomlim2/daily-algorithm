import { render, screen } from "@testing-library/react";
import D4 from "./D4";

describe("d4 alg", () => {
  test("renders '[0,1]' as a array", () => {
    //setup
    const inputNembers = [2, 7, 11, 15];
    const target = 9;

    render(<D4 a={inputNembers} b={target} />);

    //Exercise
    const expectedResult = [0, 1];

    //Assert

    expect(expectedResult);
  });

  test("renders '120' as a number", () => {
    //setup
    const inputNembers = [3,2,4];
    const target = 6;

    render(<D4 a={inputNembers} b={target} />);

    //Exercise
    const expectedResult = [1, 2];

    //Assert

    expect(expectedResult);
  });
});
