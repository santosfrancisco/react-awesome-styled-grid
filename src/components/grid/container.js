import PropTypes from 'prop-types'
import styled, {
  css
} from 'styled-components'

import config, {
  DIMENSIONS
} from '../../config'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;

  ${p => css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      padding: 0 ${config(p).paddingWidth[ d ]}rem;
    `)}
  `}
  

  ${p => !p.fluid && css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      ${typeof config(p).container[d] === 'number' ? `max-width: ${config(p).container[ d ]}rem;` : `max-width: 100%;`}
    `)}
  `}

  ${({ debug }) => debug && css`
    background-color: #5901ad40;
    outline: # fff solid 1 px;
  `}
`

Container.displayName = 'Container'

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Container
