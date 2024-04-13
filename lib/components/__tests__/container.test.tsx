import { render } from "@testing-library/react";
import { DIMENSIONS, BASE_CONF } from "../../config";
import { Container } from "../grid/container";

describe("<Container />", () => {
  it("should render default style correctly", () => {
    const { container } = render(<Container>children</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should have a max-width when it is a fluid container", () => {
    const { container } = render(<Container fluid>children</Container>);
    expect(container.firstChild).toHaveStyleRule("max-width", "100%");
  });

  it("should have a width when it is not a fluid container", () => {
    const { container } = render(<Container>children</Container>);

    DIMENSIONS.forEach((d) => {
      if (d === DIMENSIONS[0]) {
        expect(container.firstChild).toHaveStyleRule("max-width", "100%");
      } else {
        expect(container.firstChild).toHaveStyleRule(
          `${typeof BASE_CONF.container[d] === "number" ? "max-width" : "width"}`,
          `${typeof BASE_CONF.container[d] === "number" ? `${BASE_CONF.container[d]}rem` : `100%`}`,
          {
            media: `only screen and (min-width: ${BASE_CONF.breakpoints[d]}rem)`
          }
        );
      }
    });
  });

  it("should have different style when it`s debug props is true", () => {
    const { container } = render(<Container debug>children</Container>);
    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      "#5901ad40"
    );
    expect(container.firstChild).toHaveStyleRule("outline", "#fff solid 1px");
  });
});
