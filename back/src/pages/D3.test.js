import { render, screen } from "@testing-library/react";
import D3 from "./D3";

describe("d3 alg", () => {
  test("renders '120' as a number", () => {
    //setup
    const inputNember = 5;
    const expectedResult = 120;

    render(<D3 a={inputNember} />);

    //Exercise
    const helloWorldElement = screen.getByText(expectedResult);

    //Assert

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders '6' as a number", () => {
    //setup
    const inputNember = 3;
    const expectedResult = 6;

    render(<D3 a={inputNember} />);

    //Exercise
    const helloWorldElement = screen.getByText(expectedResult);

    //Assert

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders '0' as a number", () => {
    //setup
    const inputNember = 0;
    const expectedResult = 1;

    render(<D3 a={inputNember} />);

    //Exercise
    const helloWorldElement = screen.getByText(expectedResult);

    //Assert

    expect(helloWorldElement).toBeInTheDocument();
  });
});
