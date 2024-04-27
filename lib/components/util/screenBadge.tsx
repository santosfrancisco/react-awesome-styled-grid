import styled, { css } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import config, { DIMENSIONS } from "../../config";

export const ScreenBadge = styled.div.withConfig({
  shouldForwardProp: (prop) => isPropValid(prop)
})`
  z-index: 10;
  position: fixed;
  font-size: 1.5rem;
  font-weight: bold;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 30px;
  background-color: #5901ad40;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  ${(props) => css`
    ${DIMENSIONS.map(
      (dimension) =>
        config(props).breakpoints[dimension] &&
        config(props).media[dimension]`
      &::before {
        content: '${dimension}'
      }
    `
    )}
  `}
`;
