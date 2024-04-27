import { render } from "@testing-library/react";
import { Row } from "../grid/row";
import { GridBreakpoints } from "@site/lib/types";

describe("<Row >children</Row>", () => {
  it("should render default style correctly", () => {
    const { asFragment } = render(<Row>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a reverse direction for each media", () => {
    const { asFragment } = render(<Row reverse>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a reverse direction for specific screen", () => {
    const props = {
      reverse: ["md", "lg"] as GridBreakpoints[]
    };
    const { asFragment } = render(<Row {...props}>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule justify-content center", () => {
    const props = {
      justify: "center"
    };
    const { asFragment } = render(<Row {...props}>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule justify-content center only in MD screen", () => {
    const props = {
      justify: {
        md: "center"
      }
    };
    const { asFragment } = render(<Row {...props}>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule align-items center", () => {
    const props = {
      align: "center"
    };
    const { asFragment } = render(<Row {...props}>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule align-items center only in MD screen", () => {
    const props = {
      align: {
        md: "center"
      }
    };

    const { asFragment } = render(<Row {...props}>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have different style when it`s debug props is true", () => {
    const { asFragment } = render(<Row debug>children</Row>);
    expect(asFragment()).toMatchSnapshot();
  });
});
