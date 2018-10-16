import { css } from 'styled-components'

const CUSTOM_CONF = 'awesomegrid'
export const DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl']
export const BREAKPOINTS = [1, 576, 768, 992, 1200] // breakpoints in px
export const BASE_CONF = {
    columns: [4, 8, 8, 12, 12] ,
    gutterWidth: [1, 1.5, 1.5, 2, 2] , // rem
    paddingWidth: [1, 576, 768, 992, 1200] , // rem
    container: ['full', 540, 720, 960, 1140],
    breakpoints: [1, 576, 768, 992, 1200]
}

console.log(config)

// export const BASE_CONF = {
//   columns: 12,
//   gutterWidth: 16, // px
//   paddingWidth: 16, // px
//   mediaQuery: 'only screen',
//   container: {
//     sm: 540, // px
//     md: 720, // px
//     lg: 960, // px
//     xl: 1140 // px
//   },
//   breakpoints: {
//     xs: BREAKPOINTS[0],
//     sm: BREAKPOINTS[1],
//     md: BREAKPOINTS[2],
//     lg: BREAKPOINTS[3],
//     xl: BREAKPOINTS[4]
//   }
// }

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
        breakpoint !== 0 && `(min-width: ${breakpointWidth}px)`
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
