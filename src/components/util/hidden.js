import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getScreenClass } from '../util/screens'
import { withTheme } from 'styled-components'

export class Hidden extends Component {
  static defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    theme: {}
  }
  constructor () {
    super()
    this.state = {screen: 'xs'}
  }
  componentWillMount () {
    this.setScreen()
    if (typeof window !== 'undefined') {
      window.addEventListener('orientationchange', this.setScreen, false)
      window.addEventListener('resize', this.setScreen, false)
    }
  }
  setScreen = () => {
    let lastScreenClass = this.state.screen
    const actualScreenClass = getScreenClass(this.props)
    if (!lastScreenClass || (lastScreenClass !== actualScreenClass)) {
      lastScreenClass = actualScreenClass
      this.setState({screen: actualScreenClass})
    }
  }

  componentWillUnmount () {
    window.removeEventListener('orientationchange', this.setScreen)
    window.removeEventListener('resize', this.setScreen)
}

  isHidden () {
    const { xs, sm, md, lg, xl } = this.props
    switch (this.state.screen) {
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

  render () {
    const { children } = this.props

    if (this.isHidden()) return false
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }
}

Hidden.displayName = 'Hidden'

Hidden.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  children: PropTypes.node
}

export default withTheme(Hidden)
