import React from 'react'
import renderer, { act } from 'react-test-renderer'
import config from '../../config'
import { Hidden } from '../util/hidden'

describe('<Hidden />', () => {
  const resize = width => {
    global.window.innerWidth = width
    global.window.dispatchEvent(new Event('resize'))
  }

  it('should render default style correctly', () => {
    const tree = renderer.create(<Hidden />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should initialize state', () => {
    act(() => {
      resize(1)
    })
    const root = renderer.create(<Hidden xs>hidden</Hidden>).root
    expect(root.children).toHaveLength(0)
    act(() => {
      resize(768)
    })
    expect(root.children).toContain('hidden')
  })

  it('should control screen state', () => {
    act(() => {
      resize(1)
    })
    const root = renderer.create(<Hidden sm>hidden</Hidden>).root
    expect(root.children).toContain('hidden')
    act(() => {
      resize(768)
    })
    expect(root.children).toHaveLength(0)
  })

  it('should always be hidden', () => {
    const root = renderer.create(<Hidden xs sm md lg xl >hidden</Hidden>).root
    Object.values(config().breakpoints).forEach(b => {
      act(() => {
        resize(b * 16)
      })
      expect(root.children).toHaveLength(0)
    })
  })
})
