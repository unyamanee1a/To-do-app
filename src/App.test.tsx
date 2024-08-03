import { render, screen } from "@testing-library/react";

import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  test("renders sidebar button", () => {
    render(<App />);
    expect(screen.getByText("Main")).toBeInTheDocument();
    expect(screen.getByText("Lesson")).toBeInTheDocument();
    expect(screen.getByText("Home work")).toBeInTheDocument();
  });

  test("user should see lesson page when click lesson button", () => {
    render(<App />);
    const mainSection = screen.getByText("Today main focus");
    const [lessonButtonBeforeClick, headerLessonBeforeClick] =
      screen.getAllByText("Lesson");
    expect(lessonButtonBeforeClick).toBeInTheDocument();
    expect(headerLessonBeforeClick).toBeUndefined();

    userEvent.click(lessonButtonBeforeClick);

    const [lessonButtonAfterClick, headerLessonAfterClick] =
      screen.getAllByText("Lesson");

    expect(lessonButtonAfterClick).toBeInTheDocument();
    expect(headerLessonAfterClick).toBeInTheDocument();
  });
});
