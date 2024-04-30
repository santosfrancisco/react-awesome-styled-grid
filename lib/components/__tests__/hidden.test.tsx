import { act, render, screen } from "@testing-library/react";
import config from "../../config";
import { Hidden } from "../util/hidden";

describe("<Hidden />", () => {
  const resize = (width) => {
    global.window.innerWidth = width;
    global.window.dispatchEvent(new Event("resize"));
  };

  it("should render default style correctly", () => {
    const { container } = render(
      <Hidden>
        <p>children</p>
      </Hidden>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should initialize state", () => {
    act(() => {
      resize(1);
    });
    render(<Hidden xs>hidden</Hidden>);
    expect(screen.queryAllByText("hidden")).toHaveLength(0);
    act(() => {
      resize(768);
    });
    expect(screen.queryAllByText("hidden")).toHaveLength(1);
  });

  it("should control screen state", () => {
    act(() => {
      resize(1);
    });
    render(<Hidden sm>hidden</Hidden>);
    expect(screen.queryAllByText("hidden")).toHaveLength(1);
    act(() => {
      resize(768);
    });
    expect(screen.queryAllByText("hidden")).toHaveLength(0);
  });

  it("should always be hidden", () => {
    render(
      <Hidden xs sm md lg xl>
        hidden
      </Hidden>
    );
    Object.values(config().breakpoints).forEach((b) => {
      act(() => {
        resize(b * 16);
      });
      expect(screen.queryAllByText("hidden")).toHaveLength(0);
    });
  });
});
