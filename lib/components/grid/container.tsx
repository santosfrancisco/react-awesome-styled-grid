import styled, { css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import config, { DIMENSIONS } from "../../config";
import { GridContainerProps } from "../../types";

export const Container = styled("div").withConfig({
  shouldForwardProp: (prop) => isPropValid(prop)
})<GridContainerProps>`
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  ${(props) => css`
    ${DIMENSIONS.map(
      (d) =>
        config(props).container[d] &&
        config(props).media[d]`
      padding-left: ${config(props).paddingWidth[d]}rem;
      padding-right: ${config(props).paddingWidth[d]}rem;
    `
    )}
  `}

  ${(props) =>
    !props.fluid &&
    css`
      ${DIMENSIONS.map(
        (d) =>
          config(props).container[d] &&
          config(props).media[d]`
      ${
        typeof config(props).container[d] === "number"
          ? `max-width: ${config(props).container[d]}rem;`
          : `width: 100%;`
      }
    `
      )}
    `}

  ${({ debug }) =>
    debug &&
    css`
      background-color: #5901ad40;
      outline: #fff solid 1px;
    `}
`;
