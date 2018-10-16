import { css } from 'styled-components'

const CUSTOM_CONF = 'awesomegrid'
export const DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl']
export const BASE_CONF = {
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  container: {
    xs: 'full', // 'full' = max-width: 100%
    sm: 'full', // 'full' = max-width: 100%
    md: 'full', // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90 // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120 // 1920px
  },
  mediaQuery: 'only screen'
}

const configs = []
const hasCustomConf = props => JSON.stringify((props.theme && props.theme[CUSTOM_CONF]) || {})
const resolveConfig = props => {
  const themeConf = (props.theme && props.theme[CUSTOM_CONF]) || {}

  const conf = {
    ...BASE_CONF,
    ...themeConf
  }

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint]
    media[breakpoint] = makeMedia(
      [
        conf.mediaQuery,
        breakpoint !== 0 && `(min-width: ${breakpointWidth}rem)`
      ]
        .filter(Boolean)
        .join(' and ')
    )
    return media
  }, {})

  return conf
}

export default function config (props = {}) {
  const customConf = hasCustomConf(props)
  if (configs[0] === customConf) {
    return configs[1]
  }

  const conf = resolveConfig(props)

  configs[0] = customConf
  configs[1] = conf

  return conf
}

function makeMedia (media) {
  return (...args) => css`
    @media ${media} {
      ${css(...args)}
    }
  `
}
