import { render, screen, fireEvent } from "@testing-library/react";
import Examples from "./Examples";
import { EXAMPLES } from "../../data";

describe("Examples Component", () => {
  test("renders without crashing", () => {
    render(<Examples />);
    expect(screen.getByText("Examples")).toBeInTheDocument();
  });

  test("displays 'Please select a topic' when no topic is selected", () => {
    render(<Examples />);
    expect(screen.getByText("Please select a topic")).toBeInTheDocument();
  });

  test("displays content when a topic is selected", () => {
    render(<Examples />);
    const button = screen.getByText("Components");
    fireEvent.click(button);
    expect(screen.getByText(EXAMPLES["components"].title)).toBeInTheDocument();
    expect(screen.getByText(EXAMPLES["components"].description)).toBeInTheDocument();
    expect(screen.getByText(EXAMPLES["components"].code)).toBeInTheDocument();
  });

  test("changes content when a different topic is selected", () => {
    render(<Examples />);
    const componentsButton = screen.getByText("Components");
    fireEvent.click(componentsButton);
    expect(screen.getByText(EXAMPLES["components"].title)).toBeInTheDocument();

    const jsxButton = screen.getByText("JSX");
    fireEvent.click(jsxButton);
    expect(screen.getByText(EXAMPLES["jsx"].title)).toBeInTheDocument();
  });
});
