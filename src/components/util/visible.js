import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getScreenClass } from '../util/screens'

class Visible extends Component {
  constructor () {
    super()
    this.state = {screen: 'xs'}
    this.setScreen = this.setScreen.bind(this)
  }
  componentDidMount () {
    this.setScreen()
    if (typeof window !== 'undefined') {
      window.addEventListener('orientationchange', this.setScreen, false)
      window.addEventListener('resize', this.setScreen, false)
    }
  }
  setScreen () {
    let lastScreenClass = this.state.screen
    const actualScreenClass = getScreenClass()
    if (!lastScreenClass || (lastScreenClass !== actualScreenClass)) {
      lastScreenClass = actualScreenClass
      this.setState({screen: actualScreenClass})
    }
  }

  componentWillUnmount () {
    window.removeEventListener('orientationchange', this.setScreen)
    window.removeEventListener('resize', this.setScreen)
  }

  isVisible () {
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

    return (
      <React.Fragment>
        {this.isVisible() && children}
      </React.Fragment>
    )
  }
}

Visible.displayName = 'Visible'

Visible.propTypes = {
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  md: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  children: PropTypes.node
}

export default Visible
