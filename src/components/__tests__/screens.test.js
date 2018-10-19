import config, { DIMENSIONS } from '../../config'
import { getViewPort, getScreenClass } from '../util/screens'

describe('screens', () => {
  it('should return null', () => {
    global.window.innerWidth = null
    expect(getViewPort()).toBeNull()
  })

  it('should return window inner width', () => {
    global.window.innerWidth = 768
    expect(getViewPort()).toBe(768)
  })

  it('should return undefined screen class', () => {
    global.window.innerWidth = null
    expect(getScreenClass()).toBeUndefined()
  })

  it('should return the correct screen class', () => {
    Object.values(config().breakpoints).forEach((b, i) => {
      global.window.innerWidth = b * 16
      expect(getScreenClass()).toBe(DIMENSIONS[i])
    })
  })
})