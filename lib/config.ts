import { Config, ConfigProps, GridBreakpoints, Media } from "@site/types";
import { css, CSSObject } from "styled-components";

export const CUSTOM_CONF = "awesomegrid";
export const DIMENSIONS: GridBreakpoints[] = ["xs", "sm", "md", "lg", "xl"];
export const BASE_CONF: Config = {
  media: null,
  mediaQuery: "only screen",
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
    xs: "full", // 'full' = max-width: 100%
    sm: "full", // 'full' = max-width: 100%
    md: "full", // 'full' = max-width: 100%
    lg: 90, // max-width: 1440px
    xl: 90 // max-width: 1440px
  },
  breakpoints: {
    xs: 1,
    sm: 48, // 768px
    md: 64, // 1024px
    lg: 90, // 1440px
    xl: 120 // 1920px
  }
};

const configs = [];
const hasCustomConf = (props: ConfigProps) => {
  if (!props?.theme) return {};
  return JSON.stringify(props.theme[CUSTOM_CONF] || {});
};
const resolveConfig = (props: ConfigProps) => {
  let themeConf = {};
  if (props?.theme) {
    themeConf = props.theme[CUSTOM_CONF] || {};
  }

  const conf: Config = {
    ...BASE_CONF,
    ...themeConf
  };

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint];
    media[breakpoint] = makeMedia(
      [
        conf.mediaQuery,
        breakpointWidth >= 0 && `(min-width: ${breakpointWidth}rem)`
      ]
        .filter(Boolean)
        .join(" and ")
    );
    return media;
  }, {} as Media);

  return conf;
};

export default function config(props?: ConfigProps): Config {
  const customConf = hasCustomConf(props);
  if (configs[0] === customConf) {
    return configs[1];
  }

  const conf = resolveConfig(props);

  configs[0] = customConf;
  configs[1] = conf;

  return conf;
}

function makeMedia(media: string) {
  return (...args: CSSObject[] | TemplateStringsArray) => css`
    @media ${media} {
      ${css.apply(null, [...args])}
    }
  `;
}
