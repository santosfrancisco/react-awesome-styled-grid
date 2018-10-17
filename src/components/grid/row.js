
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import config, { DIMENSIONS } from '../../config'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  flex-direction: row;
  flex-wrap: wrap;


  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[ d + 'Reverse' ] && `flex-direction: row-reverse;`}
    `)}
  `}

  ${({ debug }) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Row.displayName = 'Row'

Row.propTypes = {
  xsReverse: PropTypes.bool,
  smReverse: PropTypes.bool,
  mdReverse: PropTypes.bool,
  lgReverse: PropTypes.bool,
  xlReverse: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Row
