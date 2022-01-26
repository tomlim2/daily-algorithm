import { render, screen } from "@testing-library/react";
import D2 from "./D2";

describe("d2 alg", () => {
  test("renders '1' as a number", () => {
    //Arrange
    render(<D2 a={2} b={1} />);

    //Act

    //Assert
    const expected = 1;
    const helloWorldElement = screen.getByText(expected);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders '2' as a number", () => {
    //Arrange
    render(<D2 a={3} b={1} />);

    //Act

    //Assert
    const expected = 2;
    const helloWorldElement = screen.getByText(expected);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
