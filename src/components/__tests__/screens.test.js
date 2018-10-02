import { BREAKPOINTS, DIMENSIONS } from '../../config'
import { getViewPort, getScreenClass } from '../util/screens'

describe('screens', () => {
  it('should return null', () => {
    global.window.innerWidth = null
    expect(getViewPort()).toBeNull()
  })

  it('should return window inner width', () => {
    global.window.innerWidth = 576
    expect(getViewPort()).toBe(576)
  })

  it('should return undefined screen class', () => {
    global.window.innerWidth = null
    expect(getScreenClass()).toBeUndefined()
  })

  it('should return the correct screen class', () => {
    BREAKPOINTS.forEach((b, i) => {
      global.window.innerWidth = b
      expect(getScreenClass()).toBe(DIMENSIONS[i])
    })
  })
})