import React from "react";
import renderer from "react-test-renderer";
import { DIMENSIONS, BASE_CONF } from "../../config";
import Container from "../grid/container";
import "jest-styled-components";

describe("<Container />", () => {
  it("should render default style correctly", () => {
    const tree = renderer.create(<Container />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have a max-width when it is a fluid container", () => {
    const tree = renderer.create(<Container fluid />).toJSON();
    expect(tree).toHaveStyleRule("max-width", "100%");
  });

  it("should have a width when it is not a fluid container", () => {
    const tree = renderer.create(<Container />).toJSON();

    const { breakpoints, container } = BASE_CONF;

    DIMENSIONS.forEach((d) => {
      if (d === DIMENSIONS[0]) {
        expect(tree).toHaveStyleRule("max-width", "100%");
      } else {
        expect(tree).toHaveStyleRule(
          `${typeof container[d] === "number" ? "max-width" : "width"}`,
          `${typeof container[d] === "number" ? `${container[d]}rem` : `100%`}`,
          {
            media: `only screen and (min-width: ${breakpoints[d]}rem)`,
          }
        );
      }
    });
  });

  it("should have different style when it`s debug props is true", () => {
    const tree = renderer.create(<Container debug />).toJSON();
    expect(tree).toHaveStyleRule("background-color", "#5901ad40");
    expect(tree).toHaveStyleRule("outline", "#fff solid 1px");
  });

  it("should pass every props", () => {
    const tree = renderer.create(<Container id="uniqueID" lol="anotherprop" />);
    const testInstance = tree.root;
    expect(testInstance.findByType(Container).props.id).toBe("uniqueID");
    expect(testInstance.findByType(Container).props.lol).toBe("anotherprop");
  });
});
