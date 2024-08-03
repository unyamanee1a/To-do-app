import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("renders sidebar button", () => {
    render(<App />);
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("Lesson")).toBeInTheDocument();
    expect(screen.getByText("Home work")).toBeInTheDocument();
  });
});
