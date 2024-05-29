import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Page Test Case", () => {
  // beforeAll(() => console.log("before all"));
  // beforeEach(() => console.log("before each"));
  // afterAll(() => {
  //   console.log("After all");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });
  //You can write it instead of test it is alias of test both will work
  it("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });
  it("Should load Heading contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should load Heading contact component", () => {
    render(<Contact />);
    const button = screen.getByText("submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });
  it("Should load input inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });
  it("Should load two input boxes on the contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(3);
  });
});
