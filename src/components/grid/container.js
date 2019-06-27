import PropTypes from 'prop-types'
import React from 'react'
import styled, {
  css
} from 'styled-components'

import config, {
  DIMENSIONS
} from '../../config'

import GridDebug from '../util/gridDebug'

const Container = styled(({ className, grid, children }) => {
  return (
    <div className={className}>
      {grid && <GridDebug />}
      {children}
    </div>
  )
})`
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      padding-left: ${config(p).paddingWidth[ d ]}rem;
      padding-right: ${config(p).paddingWidth[ d ]}rem;
    `)}
  `}
  

  ${p => !p.fluid && css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      ${typeof config(p).container[d] === 'number' ? `width: ${config(p).container[ d ]}rem;` : `width: 100%`}
    `)}
  `}

  ${({ debug }) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}

    
  ${({ grid }) => grid && css`position: relative;`}
`

Container.displayName = 'Container'

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Container
