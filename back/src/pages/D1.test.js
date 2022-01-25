import { render, screen } from "@testing-library/react";
import D1 from "./D1";

describe("d1 alg", () => {
  test("renders '3' as a number", () => {
    //Arrange
    render(<D1 a={2} b={1} />);

    //Act

    //Assert
    const expected = 3;
    const helloWorldElement = screen.getByText(expected);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders '4' as a number", () => {
    //Arrange
    render(<D1 a={3} b={1} />);

    //Act

    //Assert
    const expected = 4;
    const helloWorldElement = screen.getByText(expected);
    expect(helloWorldElement).toBeInTheDocument();
  });
});
