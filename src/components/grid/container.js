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
        ${config(p).container[ d ] === 'full'
          ? null
          : `padding: 0 ${config(p).paddingWidth[ d ]}rem;`
        }
    `)}
  `}
  

  ${p => !p.fluid && css`
    ${DIMENSIONS.map(d =>
    config(p).container[ d ] && config(p).media[ d ]`
      ${p => config(p).container[d] === 'full'
        ? `max-width: 100%;`
        : `max-width: ${config(p).container[ d ]}rem;`}
      }
    `)}
  `}

  ${({ debug }) => debug && css`
    background-color: #5901ad40;
    outline: # fff solid 1 px;
  `}
`

Container.displayName = 'Container'

Container.propTypes = {
  paddingWidth: PropTypes.number,
  fluid: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool
}

export default Container
