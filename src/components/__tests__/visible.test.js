import React from 'react'
import renderer from 'react-test-renderer'
import { BREAKPOINTS, DIMENSIONS } from '../../config'
import Visible from '../util/visible'

describe('<Visible />', () => {
  const resize = width => {
    global.window.innerWidth = width
    global.window.dispatchEvent(new Event('resize'))
  }

  it('should render default style correctly', () => {
    const tree = renderer.create(<Visible />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should initialize state', () => {
    resize(1)
    const root = renderer.create(<Visible xs >visible</Visible>).root
    expect(root.children).toContain('visible')
    resize(576)
    expect(root.children).toHaveLength(0)
  })

  it('should unlisten resize and orientation events', () => {
    const spy = jest.spyOn(global.window, 'removeEventListener')

    const component = renderer.create(<Visible />)
    const instance = component.getInstance()
    component.unmount()

    expect(spy).toHaveBeenCalledWith('orientationchange', instance.setScreen)
    expect(spy).toHaveBeenCalledWith('resize', instance.setScreen)

    spy.mockRestore()
  })

  it('should control screen state', () => {
    resize(1)
    const root = renderer.create(<Visible sm>visible</Visible>).root
    expect(root.children).toHaveLength(0)

    resize(576)
    expect(root.children).toContain('visible')
  })

  it('should always be visible', () => {
    const root = renderer.create(<Visible xs sm md xl lg>visible</Visible>).root

    BREAKPOINTS.forEach(b => {
      resize(b)
      expect(root.children).toContain('visible')
    })
  })
})
