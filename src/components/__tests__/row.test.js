import React from 'react'
import renderer from 'react-test-renderer'
import { DIMENSIONS, BASE_CONF } from '../../config'
import Row from '../grid/row'
import 'jest-styled-components'

describe('<Row />', () => {
  it('should render default style correctly', () => {
    const tree = renderer.create(<Row />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should have a reverse direction for each media', () => {
    const tree = renderer.create(<Row reverse />).toJSON()

    expect(tree).toHaveStyleRule(
      'flex-direction', `row-reverse`)
  })

  it('should have a reverse direction for each media', () => {
    const tree = renderer.create(<Row reverse />).toJSON()

    expect(tree).toHaveStyleRule(
      'flex-direction', `row-reverse`)
  })

  it('should have a reverse direction for specific screen', () => {
    const tree = renderer.create(<Row reverse={['md', 'lg']} />).toJSON()
    const { breakpoints } = BASE_CONF

    expect(tree).toHaveStyleRule(
      'flex-direction', `row-reverse`, {
        media: `only screen and (min-width: ${breakpoints['md']}rem)`
      })

    expect(tree).toHaveStyleRule(
      'flex-direction', `row-reverse`, {
        media: `only screen and (min-width: ${breakpoints['lg']}rem)`
      })
  })

  it('should have different style when it`s debug props is true', () => {
    const tree = renderer.create(<Row debug />).toJSON()
    expect(tree).toHaveStyleRule('background-color', '#5901ad40')
    expect(tree).toHaveStyleRule('outline', '#fff solid 1px')
  })

  it('should pass every props', () => {
    const tree = renderer.create(<Row id='uniqueID' lol='anotherprop' />)
    const testInstance = tree.root
    expect(testInstance.findByType(Row).props.id).toBe('uniqueID')
    expect(testInstance.findByType(Row).props.lol).toBe('anotherprop')
  })

  it('should have the css rule justify-content center', () => {
    const props = {
      justify: 'center'
    }
    const tree = renderer.create(<Row {...props} />).toJSON()

    expect(tree).toHaveStyleRule('justify-content', 'center')
  })

  it('should have the css rule justify-content center only in MD screen', () => {
    const props = {
      justify: {
        md: 'center'
      }
    }

    const tree = renderer.create(<Row {...props} />).toJSON()

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
    const tree = renderer.create(<Row {...props} />).toJSON()

    expect(tree).toHaveStyleRule('align-items', props.align)
  })

  it('should have the css rule align-items center only in MD screen', () => {
    const props = {
      align: {
        md: 'center'
      }
    }

    const tree = renderer.create(<Row {...props} />).toJSON()

    const { breakpoints } = BASE_CONF

    DIMENSIONS.forEach(d => {
      expect(tree).toHaveStyleRule(
        'align-items', props.align[d], {
          media: `only screen and (min-width: ${breakpoints[d]}rem)`
        }
      )
    })
  })
})
