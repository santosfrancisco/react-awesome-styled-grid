import React from 'react'
import renderer from 'react-test-renderer'
import { BREAKPOINTS, DIMENSIONS } from '../../config'
import Visible from '../util/visible'

describe('<Visible />', () => {
  it('should render default style correctly', () => {
    const tree = renderer.create(<Visible />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should initialize state', () => {
    const instance = renderer.create(<Visible />).getInstance()
    expect(instance.state).toEqual({ screen: 'lg' })
  })

  it('should listen resize and orientation events', () => {
    const addEventListener = jest.fn()
    global.window.addEventListener = addEventListener

    const instance = renderer.create(<Visible />).getInstance()

    expect(addEventListener.mock.calls[3]).toEqual(['orientationchange', instance.setScreen, false])
    expect(addEventListener.mock.calls[4]).toEqual(['resize', instance.setScreen, false])
  })

  it('should unlisten resize and orientation events', () => {
    const removeEventListener = jest.fn()
    global.window.removeEventListener = removeEventListener

    const component = renderer.create(<Visible />)
    const instance = component.getInstance()

    component.unmount()

    expect(removeEventListener.mock.calls[4]).toEqual(['orientationchange', instance.setScreen])
    expect(removeEventListener.mock.calls[5]).toEqual(['resize', instance.setScreen])
  })

  it('should control screen state', () => {
    global.window.innerWidth = 576
    const instance = renderer.create(<Visible />).getInstance()
    instance.setScreen()
    expect(instance.state.screen).toBe('sm')
  })

  it('should always be visible', () => {
    const resize = width => {
      global.window.innerWidth = width
      global.window.dispatchEvent(new Event('resize'))
    }

    const instance = renderer.create(<Visible xs sm md xl lg />).getInstance()
    
    BREAKPOINTS.forEach(b => {
      resize(b)
      expect(instance.isVisible()).toBe(true)
    })
  })

  it('should be null if not screen on state', () => {
    const instance = renderer.create(<Visible xs sm md xl lg />).getInstance()
    
    instance.state = {}
    expect(instance.isVisible()).toBe(false)
  })
})