import { CUSTOM_CONF } from "./config";
import * as React from "react";
import { DefaultTheme, css } from "styled-components";
export type GridBreakpoints = "xs" | "sm" | "md" | "lg" | "xl";

export type AlignOrJustifyOptions = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

export type OffsetOptions = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type OrderOptions = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type Grid = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  debug?: boolean;
};

export type GridContainerProps = Grid & {
  fluid?: boolean;
};

export type GridRowProps = Grid & {
  reverse?: boolean | GridBreakpoints[];
  align?: string | object;
  justify?: string | object;
};

export type GridColProps = Grid & {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  offset?: number | OffsetOptions;
  order?: number | OrderOptions;
  reverse?: boolean | GridBreakpoints[];
  align?: string | AlignOrJustifyOptions;
  justify?: string | AlignOrJustifyOptions;
  noGutter?: boolean;
};

export type VisibleProps = {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  children: React.ReactNode;
};

export type HiddenProps = {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  children: React.ReactNode;
};

export type ScreenClassProps = {
  render: (screen: GridBreakpoints) => React.ReactNode;
};

export type Media = Record<GridBreakpoints, typeof css>;

export type Config = {
  media: Media;
  mediaQuery: string;
  columns: Record<GridBreakpoints, number>;
  gutterWidth: Record<GridBreakpoints, number>;
  paddingWidth: Record<GridBreakpoints, number>;
  container: Record<GridBreakpoints, number | string>;
  breakpoints: Record<GridBreakpoints, number>;
};

export type AwesomeTheme = { [CUSTOM_CONF]: Partial<Config> };

export type ConfigProps = { theme?: DefaultTheme };

export type Util = {
  getScreenClass: (props?: ConfigProps) => GridBreakpoints;
  getViewPort: () => number | null;
};
