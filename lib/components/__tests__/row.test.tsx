import { render } from "@testing-library/react";
import { DIMENSIONS, BASE_CONF } from "../../config";
import { Row } from "../grid/row";

describe("<Row >children</Row>", () => {
  it("should render default style correctly", () => {
    const { container } = render(<Row>children</Row>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should have a reverse direction for each media", () => {
    const { container } = render(<Row reverse>children</Row>);

    expect(container.firstChild).toHaveStyleRule(
      "flex-direction",
      `row-reverse`
    );
    expect(container.firstChild).toHaveStyleRule("flex-wrap", `wrap-reverse`);
  });

  it("should have a reverse direction for each media", () => {
    const { container } = render(<Row reverse>children</Row>);

    expect(container.firstChild).toHaveStyleRule(
      "flex-direction",
      `row-reverse`
    );
    expect(container.firstChild).toHaveStyleRule("flex-wrap", `wrap-reverse`);
  });

  it("should have a reverse direction for specific screen", () => {
    const { container } = render(<Row reverse={["md", "lg"]}>children</Row>);
    const { breakpoints } = BASE_CONF;

    expect(container.firstChild).toHaveStyleRule("flex-direction", "row", {
      media: `only screen and (min-width: ${breakpoints.xs}rem)`
    });

    expect(container.firstChild).toHaveStyleRule("flex-wrap", "wrap", {
      media: `only screen and (min-width: ${breakpoints.xs}rem)`
    });

    expect(container.firstChild).toHaveStyleRule("flex-direction", "row", {
      media: `only screen and (min-width: ${breakpoints.sm}rem)`
    });

    expect(container.firstChild).toHaveStyleRule("flex-wrap", "wrap", {
      media: `only screen and (min-width: ${breakpoints.sm}rem)`
    });

    expect(container.firstChild).toHaveStyleRule(
      "flex-direction",
      "row-reverse",
      {
        media: `only screen and (min-width: ${breakpoints.md}rem)`
      }
    );

    expect(container.firstChild).toHaveStyleRule("flex-wrap", "wrap-reverse", {
      media: `only screen and (min-width: ${breakpoints.md}rem)`
    });

    expect(container.firstChild).toHaveStyleRule(
      "flex-direction",
      "row-reverse",
      {
        media: `only screen and (min-width: ${breakpoints.lg}rem)`
      }
    );

    expect(container.firstChild).toHaveStyleRule("flex-wrap", "wrap-reverse", {
      media: `only screen and (min-width: ${breakpoints.lg}rem)`
    });

    expect(container.firstChild).toHaveStyleRule("flex-direction", "row", {
      media: `only screen and (min-width: ${breakpoints.xl}rem)`
    });

    expect(container.firstChild).toHaveStyleRule("flex-wrap", "wrap", {
      media: `only screen and (min-width: ${breakpoints.xl}rem)`
    });
  });

  it("should have different style when it`s debug props is true", () => {
    const { container } = render(<Row debug>children</Row>);
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "#5901ad40"
    );
    expect(container.firstChild).toHaveStyleRule("outline", "#fff solid 1px");
  });

  it("should have the css rule justify-content center", () => {
    const props = {
      justify: "center"
    };
    const { container } = render(<Row {...props}>children</Row>);

    expect(container.firstChild).toHaveStyleRule("justify-content", "center");
  });

  it("should have the css rule justify-content center only in MD screen", () => {
    const props = {
      justify: {
        md: "center"
      }
    };

    const { container } = render(<Row {...props}>children</Row>);

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
    const { container } = render(<Row {...props}>children</Row>);

    expect(container.firstChild).toHaveStyleRule("align-items", props.align);
  });

  it("should have the css rule align-items center only in MD screen", () => {
    const props = {
      align: {
        md: "center"
      }
    };

    const { container } = render(<Row {...props}>children</Row>);

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
});
