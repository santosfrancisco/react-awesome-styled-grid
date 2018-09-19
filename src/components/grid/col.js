import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import config, { DIMENSIONS } from '../../config'

const Col = styled.div`
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: flex;
 
  ${p => !p.noGutter && css`
    padding-right: ${p => config(p).gutterWidth / 2}px;
    padding-left: ${p => config(p).gutterWidth / 2}px;
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p => p[d] && `
        flex: 0 0 ${(p[d] / config(p).columns) * 100}%;
        max-width: ${(p[d] / config(p).columns) * 100}%;
      `}
    `)}
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      ${p[ d + 'Offset' ] && `margin-left: ${(p[ 'offset-' + d ] / config(p).columns) * 100}%`};
    `)}
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).breakpoints[d] && config(p).media[d]`
      flex-direction: ${p[ d + 'Reverse' ] ? `column-reverse` : `column`};
    `)}
  `}

  ${({debug}) => debug && css`
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
  gutterWidth: PropTypes.number,
  columns: PropTypes.number,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Col
