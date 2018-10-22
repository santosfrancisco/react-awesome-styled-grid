
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
    config(p).container[ d ] && config(p).media[ d ]`
      margin-left: -${config(p).gutterWidth[d] / 2}rem;
      margin-right: -${config(p).gutterWidth[d] / 2}rem;
    `)}
  `}

  ${p => p.reverse && css`
    ${Array.isArray(p.reverse)
    ? DIMENSIONS.map(d =>
      config(p).breakpoints[d] && config(p).media[d]`
      flex-direction:${p.reverse.indexOf(d) !== -1 ? `row-reverse` : `row`};`)
    : 'flex-direction: row-reverse;'}
  `}

  ${({ debug }) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Row.displayName = 'Row'

const boolOrArray = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array
])

Row.propTypes = {
  reverse: boolOrArray,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Row
