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
    const tree = renderer.create(<Row reverse={['md']} />).toJSON()

    expect(tree).toHaveStyleRule(
      'flex-direction', `row`)
  })

  it('should have a reverse direction for specific screen', () => {
    const tree = renderer.create(<Row reverse={['md', 'lg']} />).toJSON()

    expect(tree).toHaveStyleRule(
      'flex-direction', `row`)
  })

  it('should have different style when it`s debug props is true', () => {
    const tree = renderer.create(<Row debug />).toJSON()
    expect(tree).toHaveStyleRule('background-color', '#5901ad40')
    expect(tree).toHaveStyleRule('outline', '#fff solid 1px')
  })
})