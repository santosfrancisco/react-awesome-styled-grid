import { render } from "@testing-library/react";
import { Col } from "../grid/col";
import { GridBreakpoints } from "@site/lib/types";

describe("<Col />", () => {
  it("should render default style correctly", () => {
    const { asFragment } = render(<Col>children</Col>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no gutter", () => {
    const { asFragment } = render(<Col noGutter>children</Col>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the specified size", () => {
    const props = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a offset space for each media", () => {
    const props = {
      offset: {
        xs: 1,
        sm: 2,
        md: 0,
        lg: 4,
        xl: 5
      }
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a offset space for all media", () => {
    const props = {
      offset: 2
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a order space for each media", () => {
    const props = {
      order: {
        xs: 5,
        sm: 3,
        md: 2,
        lg: 6,
        xl: 8
      }
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a order space for all media", () => {
    const props = {
      order: 3
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a reverse direction for all medias", () => {
    const { asFragment } = render(<Col reverse>children</Col>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule justify-content center", () => {
    const props = {
      justify: "center"
    };
    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule justify-content center only in MD screen", () => {
    const props = {
      justify: {
        md: "center"
      }
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule align-items center", () => {
    const props = {
      align: "center"
    };
    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have the css rule align-items center only in MD screen", () => {
    const props = {
      align: {
        md: "center"
      }
    };

    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a reverse direction only for all media", () => {
    const props = {
      reverse: true
    };
    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a reverse direction only for MD media", () => {
    const props = {
      reverse: ["md"] as GridBreakpoints[]
    };
    const { asFragment } = render(<Col {...props}>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should have different style when it`s debug props is true", () => {
    const { asFragment } = render(<Col debug>children</Col>);

    expect(asFragment()).toMatchSnapshot();
  });
});
