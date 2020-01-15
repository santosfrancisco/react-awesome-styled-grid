
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import config, { DIMENSIONS } from '../../config'

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
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
        flex-direction: ${p.reverse.indexOf(d) !== -1 ? `row-reverse` : `row`};
      `)
    : 'flex-direction: row-reverse;'}
  `}

  ${p => p.align && css`
    ${typeof p.align === 'object'
    ? DIMENSIONS.map(d => config(p).breakpoints[d] && config(p).media[d]`${p.align[d] && `align-items: ${p.align[d]}`}`)
    : `align-items: ${p.align};`}
  `}
  
  ${p => p.justify && css`
    ${typeof p.justify === 'object'
    ? DIMENSIONS.map(d => config(p).breakpoints[d] && config(p).media[d]`${p.justify[d] && `justify-content: ${p.justify[d]}`}`)
    : `justify-content: ${p.justify};`}
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

const stringOrObject = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object
])

Row.propTypes = {
  reverse: boolOrArray,
  align: stringOrObject,
  justify: stringOrObject,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Row
