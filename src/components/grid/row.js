
import styled, { css } from 'styled-components'
import config, { DIMENSIONS } from '../../config'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;

  ${p => css`
    ${DIMENSIONS.map(d =>
      config(p).breakpoints[d] && config(p).media[d]`
      ${p[ 'reverse-' + d ] && `flex-direction: row-reverse;`}
    `)}
  `}

  ${({debug}) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Row.displayName = 'Row'

export default Row