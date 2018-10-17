import styled, {
  css
} from 'styled-components'

import config, {
  DIMENSIONS
} from '../../config'

const ScreenBadge = styled.div`
    z-index: 10;
    position: absolute;
    font-size: 1.5rem;
    font-weight: bold;
    left: 10px;
    bottom: 10px;
    width: 50px;
    height: 30px;
    background-color: #5901ad40;
    display: flex;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ::before {
        content: '${d}'
      }
    `)}
  `}
`

ScreenBadge.displayName = 'ScreenBadge'

export default ScreenBadge
