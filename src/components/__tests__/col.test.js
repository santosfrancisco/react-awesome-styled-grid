import React from 'react'
import renderer from 'react-test-renderer'
import { DIMENSIONS, BASE_CONF } from '../../config'
import Col from '../grid/col'
import 'jest-styled-components'

describe('<Col />', () => {
  it('should render default style correctly', () => {
    const tree = renderer.create(<Col />)
    const testInstance = tree.root
    const element = testInstance.findByType('div')

    expect(element.type).toBe('div')
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it('should render a custom element', () => {
    const tree = renderer.create(<Col component='section' />)
    const testInstance = tree.root
    const element = testInstance.findByType('section')

    expect(element.type).toBe('section')
  })

  it('should have no gutter', () => {
    const tree = renderer.create(<Col noGutter />).toJSON()

    expect(tree).toHaveStyleRule('padding-right', undefined)
    expect(tree).toHaveStyleRule('padding-left', undefined)
  })

  it('should have default gutter', () => {
    const tree = renderer.create(<Col />).toJSON()

    const { gutterWidth, breakpoints } = BASE_CONF

    DIMENSIONS.forEach(d => {
      const media = {
        media: `only screen and (min-width: ${breakpoints[d]}rem)`
      }

      const defaultGutter = `${gutterWidth[d] / 2}rem`
      expect(tree).toHaveStyleRule('padding-right', defaultGutter, media)
      expect(tree).toHaveStyleRule('padding-left', defaultGutter, media)
    })
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
      const propotionalSize = props[d] / columns[d] * 100

      const media = {
        media: `only screen and (min-width: ${breakpoints[d]}rem)`
      }

      expect(tree).toHaveStyleRule('flex', `1 1 ${propotionalSize}%`, media)
      expect(tree).toHaveStyleRule('max-width', `${propotionalSize}%`, media)
    })
  })

  it('should have a offset space for each media', () => {
    const props = {
      offset: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5
      }
    }

    const tree = renderer.create(<Col {...props} />).toJSON()

    const { breakpoints, columns } = BASE_CONF

    DIMENSIONS.forEach(d => {
      expect(tree).toHaveStyleRule(
        'margin-left', `${props.offset[d] / columns[d] * 100}%`, {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      )
    })
  })

  it('should have a reverse direction for each media', () => {
    const tree = renderer.create(<Col reverse />).toJSON()

    expect(tree).toHaveStyleRule(
      'flex-direction', `column-reverse`)
  })

  it('should have the css rule justify-content center', () => {
    const props = {
      justify: 'center'
    }
    const tree = renderer.create(<Col {...props} />).toJSON()

    expect(tree).toHaveStyleRule('justify-content', 'center')
  })

  it('should have the css rule justify-content center only in MD screen', () => {
    const props = {
      justify: {
        md: 'center'
      }
    }

    const tree = renderer.create(<Col {...props} />).toJSON()

    const { breakpoints } = BASE_CONF

    DIMENSIONS.forEach(d => {
      expect(tree).toHaveStyleRule(
        'justify-content', props.justify[d], {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      )
    })
  })

  it('should have the css rule align-items center', () => {
    const props = {
      align: 'center'
    }
    const tree = renderer.create(<Col {...props} />).toJSON()

    expect(tree).toHaveStyleRule('align-items', 'center')
  })

  it('should have the css rule align-items center only in MD screen', () => {
    const props = {
      align: {
        md: 'center'
      }
    }

    const tree = renderer.create(<Col {...props} />).toJSON()

    const { breakpoints } = BASE_CONF

    DIMENSIONS.forEach(d => {
      expect(tree).toHaveStyleRule(
        'align-items', props.align[d], {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      )
    })
  })

  it('should have a reverse direction for each media', () => {
    const tree = renderer.create(<Col reverse={['md']} />).toJSON()
    const { breakpoints } = BASE_CONF
    expect(tree).toHaveStyleRule('flex-direction', 'column-reverse', {
      media: `only screen and (min-width: ${breakpoints['md']}rem)`
    })
  })

  it('should have different style when it`s debug props is true', () => {
    const tree = renderer.create(<Col debug />).toJSON()
    expect(tree).toHaveStyleRule('background-color', '#5901ad40')
    expect(tree).toHaveStyleRule('outline', '#fff solid 1px')
  })

  it('should pass every props', () => {
    const tree = renderer.create(<Col id='uniqueID' lol='anotherprop' />)
    const testInstance = tree.root
    expect(testInstance.findByType(Col).props.id).toBe('uniqueID')
    expect(testInstance.findByType(Col).props.lol).toBe('anotherprop')
  })
})
