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
        flex: 0 0 ${(p[d] / config(p).columns)*100}%;
        max-width: ${(p[d] / config(p).columns)*100}%;
      `}
    `)}
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
      config(p).breakpoints[d] && config(p).media[d]`
      ${p[ 'offset-' + d ] && `margin-left: ${ (p[ 'offset-' + d ] / config(p).columns) * 100}%`};
    `)}
  `}

  ${p => css`
    ${DIMENSIONS.map(d =>
      config(p).breakpoints[d] && config(p).media[d]`
      flex-direction: ${p[ 'reverse-' + d ] ? `column-reverse` : `column`};
    `)}
  `}

  ${({debug}) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Col.displayName = 'Col'

Col.propTypes = {
  children: PropTypes.node
}

export default Col
