import { render } from "@testing-library/react";
import { DIMENSIONS, BASE_CONF } from "../../config";
import { Col } from "../grid/col";

describe("<Col />", () => {
  it("should render default style correctly", () => {
    const { container } = render(<Col>children</Col>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should have no gutter", () => {
    const { container } = render(<Col noGutter>children</Col>);

    expect(container.firstChild).toHaveStyleRule("padding-right", undefined);
    expect(container.firstChild).toHaveStyleRule("padding-left", undefined);
  });

  it("should have default gutter", () => {
    const { container } = render(<Col>children</Col>);

    const { gutterWidth, breakpoints } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      const media = {
        media: `only screen and (min-width: ${breakpoints[d]}rem)`
      };

      const defaultGutter = `${gutterWidth[d] / 2}rem`;
      expect(container.firstChild).toHaveStyleRule(
        "padding-right",
        defaultGutter,
        media
      );
      expect(container.firstChild).toHaveStyleRule(
        "padding-left",
        defaultGutter,
        media
      );
    });
  });

  it("should have the specified size", () => {
    const props = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5
    };

    const { container } = render(<Col {...props}>children</Col>);

    const { breakpoints, columns } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      const proportionalSize = (props[d] / columns[d]) * 100;

      const media = {
        media: `only screen and (min-width: ${breakpoints[d]}rem)`
      };

      expect(container.firstChild).toHaveStyleRule(
        "flex",
        `1 1 ${proportionalSize}%`,
        media
      );
      expect(container.firstChild).toHaveStyleRule(
        "max-width",
        `${proportionalSize}%`,
        media
      );
    });
  });

  it("should have a offset space for each media", () => {
    const props = {
      offset: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5
      }
    };

    const { container } = render(<Col {...props}>children</Col>);

    const { breakpoints, columns } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      expect(container.firstChild).toHaveStyleRule(
        "margin-left",
        `${(props.offset[d] / columns[d]) * 100}%`,
        {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      );
    });
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

    const { container } = render(<Col {...props}>children</Col>);

    const { breakpoints } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      expect(container.firstChild).toHaveStyleRule(
        "order",
        `${props.order[d]}`,
        {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      );
    });
  });

  it("should have a reverse direction for each media", () => {
    const { container } = render(<Col reverse>children</Col>);

    expect(container.firstChild).toHaveStyleRule(
      "flex-direction",
      `column-reverse`
    );
  });

  it("should have the css rule justify-content center", () => {
    const props = {
      justify: "center"
    };
    const { container } = render(<Col {...props}>children</Col>);

    expect(container.firstChild).toHaveStyleRule("justify-content", "center");
  });

  it("should have the css rule justify-content center only in MD screen", () => {
    const props = {
      justify: {
        md: "center"
      }
    };

    const { container } = render(<Col {...props}>children</Col>);

    const { breakpoints } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      expect(container.firstChild).toHaveStyleRule(
        "justify-content",
        props.justify[d],
        {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      );
    });
  });

  it("should have the css rule align-items center", () => {
    const props = {
      align: "center"
    };
    const { container } = render(<Col {...props}>children</Col>);

    expect(container.firstChild).toHaveStyleRule("align-items", "center");
  });

  it("should have the css rule align-items center only in MD screen", () => {
    const props = {
      align: {
        md: "center"
      }
    };

    const { container } = render(<Col {...props}>children</Col>);

    const { breakpoints } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      expect(container.firstChild).toHaveStyleRule(
        "align-items",
        props.align[d],
        {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      );
    });
  });

  it("should have a reverse direction for each media", () => {
    const { container } = render(<Col reverse={["md"]}>children</Col>);
    const { breakpoints } = BASE_CONF;
    expect(container.firstChild).toHaveStyleRule(
      "flex-direction",
      "column-reverse",
      {
        media: `only screen and (min-width: ${breakpoints["md"]}rem)`
      }
    );
  });

  it("should have different style when it`s debug props is true", () => {
    const { container } = render(<Col debug>children</Col>);
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "#5901ad40"
    );
    expect(container.firstChild).toHaveStyleRule("outline", "#fff solid 1px");
  });
});
