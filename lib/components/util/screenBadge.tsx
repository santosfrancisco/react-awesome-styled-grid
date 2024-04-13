import styled, { css } from "styled-components";
import config, { DIMENSIONS } from "../../config";

export const ScreenBadge: React.FC = styled.div`
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
      ::before {
        content: '${dimension}'
      }
    `
    )}
  `}
`;
