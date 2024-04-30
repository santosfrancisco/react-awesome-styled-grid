import { render } from "@testing-library/react";
import { Container } from "../grid/container";

describe("<Container />", () => {
  it("should render default style correctly", () => {
    const { asFragment } = render(<Container>children</Container>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have a max-width 100% when it is a fluid container", () => {
    const { asFragment } = render(<Container fluid>children</Container>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have different style when it`s debug props is true", () => {
    const { asFragment } = render(<Container debug>children</Container>);
    expect(asFragment()).toMatchSnapshot();
  });
});
