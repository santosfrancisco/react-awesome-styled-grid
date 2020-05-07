import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { getScreenClass } from '../util/screens'

export const Hidden = ({
  xs,
  sm,
  md,
  lg,
  xl,
  theme,
  children
}) => {
  const [currentScreen, setCurrentScreen] = useState('xs')

  const setScreen = () => {
    const newScreen = getScreenClass({ theme })
    if (currentScreen !== newScreen) {
      setCurrentScreen(newScreen)
    }
  }
  useEffect(() => {
    setScreen()
  }, [])

  useEventListener('orientationchange', setScreen)
  useEventListener('resize', setScreen)

  const isHidden = () => {
    switch (currentScreen) {
      case 'xs':
        return xs
      case 'sm':
        return sm
      case 'md':
        return md
      case 'lg':
        return lg
      case 'xl':
        return xl
    }
  }
  if (isHidden()) return false
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

Hidden.displayName = 'Hidden'

export const defaultProps = {
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  children: null,
  theme: {}
}

export const propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  theme: PropTypes.object,
  children: PropTypes.node
}

Hidden.defaultProps = defaultProps

Hidden.propTypes = propTypes

export default withTheme(Hidden)
