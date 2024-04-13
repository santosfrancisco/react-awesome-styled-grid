import { act, render, screen } from "@testing-library/react";
import config from "../../config";
import { Visible } from "../util/visible";

describe("<Visible />", () => {
  const resize = (width) => {
    global.window.innerWidth = width;
    global.window.dispatchEvent(new Event("resize"));
  };

  it("should render default style correctly", () => {
    const { container } = render(
      <Visible>
        <p>children</p>
      </Visible>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should initialize state", () => {
    act(() => {
      resize(1);
    });
    render(<Visible xs>visible</Visible>);
    expect(screen.queryAllByText("visible")).toHaveLength(1);
    act(() => {
      resize(768);
    });
    expect(screen.queryAllByText("visible")).toHaveLength(0);
  });

  it("should control screen state", () => {
    act(() => {
      resize(1);
    });
    render(<Visible sm>visible</Visible>);
    expect(screen.queryAllByText("visible")).toHaveLength(0);
    act(() => {
      resize(768);
    });
    expect(screen.queryAllByText("visible")).toHaveLength(1);
  });

  it("should always be visible", () => {
    render(
      <Visible xs sm md xl lg>
        visible
      </Visible>
    );
    Object.values(config().breakpoints).forEach((b) => {
      act(() => {
        resize(b * 16);
      });
      expect(screen.queryAllByText("visible")).toHaveLength(1);
    });
  });
});
