
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import config, { DIMENSIONS } from '../../config'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[ d + 'Reverse' ] && `flex-direction: row-reverse;`}
    `)}
  `}

    ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[ d + 'Wrap' ] && `flex-wrap: wrap;`}
    `)}
  `}

  ${({debug}) => debug && css`
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
  xsWrap: PropTypes.bool,
  smWrap: PropTypes.bool,
  mdWrap: PropTypes.bool,
  lgWrap: PropTypes.bool,
  xlWrap: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Row
