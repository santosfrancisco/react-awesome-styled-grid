
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import config, { DIMENSIONS } from '../../config'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: ${p => config(p).paddingWidth};
  padding-left: ${p => config(p).paddingWidth};

  ${p => !p.fluid && css`
    ${DIMENSIONS.map(d =>
    config(p).container[d] && config(p).media[d]`
        width: ${p => config(p).container[d]}px;
      `
    )}
  `}

  ${({debug}) => debug && css`
    background-color: #5901ad40;
    outline: #fff solid 1px;
  `}
`

Container.displayName = 'Container'

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node
}

export default Container