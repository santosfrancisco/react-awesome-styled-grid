import * as React from 'react'
import { Helmet } from 'react-helmet-async'

const Wrapper = ({ children }) => <React.Fragment>
  <Helmet>
    <meta charSet='utf-8' />
    <link rel='icon'
      type='image/ico'
      href='/public/favicon.ico'
    />
  </Helmet>
  {children}
</React.Fragment>

export default Wrapper
