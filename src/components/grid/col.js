import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import config, { DIMENSIONS } from '../../config'

const Col = styled.div`
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;

  ${p => !p.noGutter && css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      padding-right: ${config(p).gutterWidth[d] / 2}rem;
      padding-left: ${config(p).gutterWidth[d] / 2}rem;
    `)}
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[d] && `
        flex: 1 1 ${(p[d] / config(p).columns[d]) * 100}%;
        max-width: ${(p[d] / config(p).columns[d]) * 100}%;
      `}
    `)}
  `}

  ${p => p.offset && css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
    ${typeof p.offset === 'object'
    ? p.offset[d] !== undefined && `margin-left: ${p.offset[d] > 0 ? (p.offset[d] / config(p).columns[d]) * 100 : 0}%`
    : `margin-left: ${(p.offset / config(p).columns['xs']) * 100}%`};
    `)}
  `}

  ${p => p.reverse && css`
    ${Array.isArray(p.reverse)
    ? DIMENSIONS.map(d => config(p).breakpoints[d] && config(p).media[d]`
        flex-direction: ${p.reverse.indexOf(d) !== -1 ? 'column-reverse' : 'column'};
      `)
    : 'flex-direction: column-reverse;'}
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

Col.displayName = 'Col'

const numberOrString = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number
])

const stringOrObject = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.object
])

const numberOrObject = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.object
])

const boolOrArray = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.array
])

Col.propTypes = {
  xs: numberOrString,
  sm: numberOrString,
  md: numberOrString,
  lg: numberOrString,
  xl: numberOrString,
  align: stringOrObject,
  justify: stringOrObject,
  offSet: numberOrObject,
  reverse: boolOrArray,
  noGutter: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Col
