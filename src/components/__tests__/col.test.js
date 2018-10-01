import React from 'react'
import renderer from 'react-test-renderer'
import { DIMENSIONS, BASE_CONF } from '../../config'
import Col from '../grid/col'
import 'jest-styled-components'

describe('<Col />', () => {
  it('should render default style correctly', () => {
    const tree = renderer.create(<Col />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have no gutter', () => {
    const tree = renderer.create(<Col noGutter />).toJSON()

    expect(tree).toHaveStyleRule('padding-right', undefined)
    expect(tree).toHaveStyleRule('padding-left', undefined)
  })

  it('should have default gutter', () => {
    const tree = renderer.create(<Col />).toJSON()

    const { gutterWidth } = BASE_CONF

    const defaultGutter = `${gutterWidth / 2}px`
    expect(tree).toHaveStyleRule('padding-right', defaultGutter)
    expect(tree).toHaveStyleRule('padding-left', defaultGutter)
  })

  it('should have the specified size', () => {
    const props = {
      xs: 1, 
      sm: 2, 
      md: 3, 
      lg: 4, 
      xl: 5
    }

    const tree = renderer.create(<Col {...props} />).toJSON()

    const { breakpoints, columns } = BASE_CONF

    DIMENSIONS.forEach(d => {
      const propotionalSize = props[d] / columns * 100

      const media = {
        media: `only screen and (min-width: ${breakpoints[d]}px)`
      }

      expect(tree).toHaveStyleRule('flex', `0 0 ${propotionalSize}%`, media)
      expect(tree).toHaveStyleRule('max-width', `${propotionalSize}%`, media)
    })
  })

  it('should have a offset space for each media', () => {
    const props = {
      xsOffset: 1, 
      smOffset: 2, 
      mdOffset: 3, 
      lgOffset: 4, 
      xlOffset: 5
    }

    const tree = renderer.create(<Col {...props} />).toJSON()

    const { breakpoints, columns } = BASE_CONF

    DIMENSIONS.forEach(d => {
      const prop = `${d}Offset`

      expect(tree).toHaveStyleRule(
        'margin-left', `${props[prop] / columns * 100}%`, {
          media: `only screen and (min-width: ${breakpoints[d]}px)`
        }
      )
    })
  })

  it('should have a reverse direction for each media', () => {
    const tree = renderer.create(<Col xsReverse smReverse mdReverse lgReverse xlReverse />).toJSON()

    const { breakpoints } = BASE_CONF

    DIMENSIONS.forEach(d => {
      expect(tree).toHaveStyleRule(
        'flex-direction', `column-reverse`, {
          media: `only screen and (min-width: ${breakpoints[d]}px)`
        }
      )
    })
  })

  it('should have different style when it`s debug props is true', () => {
    const tree = renderer.create(<Col debug />).toJSON()
    expect(tree).toHaveStyleRule('background-color', '#5901ad40')  
    expect(tree).toHaveStyleRule('outline', '#fff solid 1px')
  })
})