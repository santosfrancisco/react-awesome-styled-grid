import React from 'react'
import renderer, { act } from 'react-test-renderer'
import config from '../../config'
import { Visible } from '../util/visible'

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
    act(() => {
      resize(1)
    })
    const root = renderer.create(<Visible xs>visible</Visible>).root
    expect(root.children).toContain('visible')
    act(() => {
      resize(768)
    })
    expect(root.children).toHaveLength(0)
  })

  it('should control screen state', () => {
    act(() => {
      resize(1)
    })
    const root = renderer.create(<Visible sm>visible</Visible>).root
    expect(root.children).toHaveLength(0)
    act(() => {
      resize(768)
    })
    expect(root.children).toContain('visible')
  })

  it('should always be visible', () => {
    const root = renderer.create(<Visible xs sm md xl lg>visible</Visible>).root
    Object.values(config().breakpoints).forEach(b => {
      act(() => {
        resize(b * 16)
      })
      expect(root.children).toContain('visible')
    })
  })
})
