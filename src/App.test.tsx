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
    const mainSection = screen.queryByText("Today main focus");
    const [lessonButtonBeforeClick, headerLessonBeforeClick] =
      screen.queryAllByText("Lesson");
    expect(lessonButtonBeforeClick).toBeInTheDocument();
    expect(headerLessonBeforeClick).toBeUndefined();
    expect(mainSection).toBeInTheDocument();

    userEvent.click(lessonButtonBeforeClick);

    const mainSectionAfterClick = screen.queryByText("Today main focus");
    const [lessonButtonAfterClick, headerLessonAfterClick] =
      screen.queryAllByText("Lesson");

    expect(lessonButtonAfterClick).toBeInTheDocument();
    expect(headerLessonAfterClick).toBeInTheDocument();
    expect(mainSectionAfterClick).not.toBeInTheDocument();
  });
});
