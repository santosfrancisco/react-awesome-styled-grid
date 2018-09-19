
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
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
      ${p[ d + 'Reverse' ] && `flex-direction: row-reverse;`}
    `)}
  `}

  ${({debug}) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Row.displayName = 'Row'

const numberOrString = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

Row.propTypes = {
  xsReverse: numberOrString,
  smReverse: numberOrString,
  mdReverse: numberOrString,
  lgReverse: numberOrString,
  xlReverse: numberOrString,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Row
