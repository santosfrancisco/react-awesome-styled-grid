import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getScreenClass } from '../util/screens'
import { withTheme } from 'styled-components'

export class ScreenClass extends Component {
  static defaultProps = {
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

  render () {
    const { render } = this.props

    return (
      <React.Fragment>
        {render && render(this.state.screen)}
      </React.Fragment>
    )
  }
}

ScreenClass.displayName = 'ScreenClass'

ScreenClass.propTypes = {
  render: PropTypes.func
}

export default withTheme(ScreenClass)
