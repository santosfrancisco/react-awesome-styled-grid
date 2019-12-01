import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = ({ className, children }) => <div className={className}>
  <Helmet>
    <meta charSet='utf-8' />
    <link rel='icon'
      type='image/ico'
      href='/public/favicon.ico'
    />
  </Helmet>
  {children}
</div>

export default styled(Wrapper)`
  code {
    color: indianred;
    margin: 0px 3px;
    padding: 3px 5px;
    border-radius: 3px;
    background: rgb(239, 242, 247);
  }
`

Wrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
