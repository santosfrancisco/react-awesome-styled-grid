import styled, { css } from "styled-components";
import config, { DIMENSIONS } from "../../config";
import { GridColProps } from "@site/types";

export const Col = styled.div<GridColProps>`
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;

  ${(props) =>
    !props.noGutter &&
    css`
      ${DIMENSIONS.map(
        (dimension) =>
          config(props).breakpoints[dimension] &&
          config(props).media[dimension]`
      padding-right: ${config(props).gutterWidth[dimension] / 2}rem;
      padding-left: ${config(props).gutterWidth[dimension] / 2}rem;
    `
      )}
    `}

  ${(props) => css`
    ${DIMENSIONS.map(
      (dimension) =>
        props[dimension] &&
        config(props).breakpoints[dimension] &&
        config(props).media[dimension]`
      flex: 1 1 ${(+props[dimension] / config(props).columns[dimension]) * 100}%;
      max-width: ${(+props[dimension] / config(props).columns[dimension]) * 100}%;
    `
    )}
  `}

  ${(props) =>
    props.offset &&
    css`
      ${DIMENSIONS.map(
        (dimension) =>
          config(props).breakpoints[dimension] &&
          config(props).media[dimension]`
    ${
      typeof props.offset === "object"
        ? props.offset[dimension] !== undefined &&
          `margin-left: ${props.offset[dimension] > 0 ? (props.offset[dimension] / config(props).columns[dimension]) * 100 : 0}%`
        : `margin-left: ${(props.offset / config(props).columns["xs"]) * 100}%`
    };
    `
      )}
    `}

  ${(props) =>
    props.order !== undefined &&
    css`
      ${DIMENSIONS.map(
        (dimension) =>
          config(props).breakpoints[dimension] &&
          config(props).media[dimension]`
    ${
      typeof props.order === "object"
        ? props.order[dimension] !== undefined &&
          `order: ${props.order[dimension]}`
        : `order: ${props.order}`
    };
    `
      )}
    `}

  ${(props) =>
    props.reverse &&
    css`
      ${Array.isArray(props.reverse)
        ? DIMENSIONS.map(
            (dimension) =>
              config(props).breakpoints[dimension] &&
              config(props).media[dimension]`
        flex-direction: ${Array.isArray(props.reverse) && props.reverse.indexOf(dimension) !== -1 ? "column-reverse" : "column"};
      `
          )
        : "flex-direction: column-reverse;"}
    `}

  ${(props) =>
    props.align &&
    css`
      ${typeof props.align === "object"
        ? DIMENSIONS.map(
            (dimensions) =>
              config(props).breakpoints[dimensions] &&
              config(props).media[
                dimensions
              ]`${props.align[dimensions] && `align-items: ${props.align[dimensions]}`}`
          )
        : `align-items: ${props.align};`}
    `}
  
  ${(props) =>
    props.justify &&
    css`
      ${typeof props.justify === "object"
        ? DIMENSIONS.map(
            (dimensions) =>
              config(props).breakpoints[dimensions] &&
              config(props).media[
                dimensions
              ]`${props.justify[dimensions] && `justify-content: ${props.justify[dimensions]}`}`
          )
        : `justify-content: ${props.justify};`}
    `}
  
  ${({ debug }) =>
    debug &&
    css`
      background-color: #5901ad40;
      outline: #fff solid 1px;
    `}
`;
