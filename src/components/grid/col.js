import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import config, { DIMENSIONS } from '../../config'

const Col = styled.div`
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;
  flex-direction: column;

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

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[ d + 'Offset' ] && `margin-left: ${(p[ d + 'Offset' ] / config(p).columns[d]) * 100}%`};
    `)}
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[ d + 'Reverse' ] && `flex-direction: column-reverse`};
    `)}
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

Col.propTypes = {
  xs: numberOrString,
  sm: numberOrString,
  md: numberOrString,
  lg: numberOrString,
  xl: numberOrString,
  xsOffset: numberOrString,
  smOffset: numberOrString,
  mdOffset: numberOrString,
  lgOffset: numberOrString,
  xlOffset: numberOrString,
  xsReverse: PropTypes.bool,
  smReverse: PropTypes.bool,
  mdReverse: PropTypes.bool,
  lgReverse: PropTypes.bool,
  xlReverse: PropTypes.bool,
  noGutter: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Col
