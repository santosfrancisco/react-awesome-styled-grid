import styled, { css } from "styled-components";
import config, { DIMENSIONS } from "../../config";
import { GridRowProps } from "@site/types";

export const Row = styled.div<GridRowProps>`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;

  ${(props) => css`
    ${DIMENSIONS.map(
      (dimension) =>
        config(props).container[dimension] &&
        config(props).media[dimension]`
      margin-left: -${config(props).gutterWidth[dimension] / 2}rem;
      margin-right: -${config(props).gutterWidth[dimension] / 2}rem;
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
         ${
           Array.isArray(props.reverse) &&
           props.reverse.indexOf(dimension) !== -1
             ? `
             flex-direction: row-reverse;
             flex-wrap: wrap-reverse;
             `
             : `
                 flex-direction: row;
                 flex-wrap: wrap;
               `
         };
        
      `
          )
        : `
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;
          `}
    `}

  ${(props) =>
    props.align &&
    css`
      ${typeof props.align === "object"
        ? DIMENSIONS.map(
            (dimension) =>
              config(props).breakpoints[dimension] &&
              config(props).media[
                dimension
              ]`${props.align[dimension] && `align-items: ${props.align[dimension]}`}`
          )
        : `align-items: ${props.align};`}
    `}
  
  ${(props) =>
    props.justify &&
    css`
      ${typeof props.justify === "object"
        ? DIMENSIONS.map(
            (dimension) =>
              config(props).breakpoints[dimension] &&
              config(props).media[dimension]`${
                props.justify[dimension] &&
                `justify-content: ${props.justify[dimension]}`
              }`
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
