import React, { useState, useEffect } from 'react'
import useEventListener from '@use-it/event-listener'
import { withTheme } from 'styled-components'
import { getScreenClass } from '../util/screens'
import { defaultProps, propTypes } from './hidden'

export const Visible = ({
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

  const isVisible = () => {
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
  if (!isVisible()) return false
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

Visible.displayName = 'Visible'

Visible.defaultProps = defaultProps

Visible.propTypes = propTypes

export default withTheme(Visible)
