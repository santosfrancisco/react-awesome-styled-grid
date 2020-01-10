import { createElement } from 'react'

export const createElementForStyle = ({ component, children, ...props }) =>
  createElement(component, props, children)
