import * as React from "react";
import * as CSS from "csstype";
import { ThemeProps, ThemedCssFunction, DefaultTheme } from "styled-components";

type IGridBreakpoints = "xs" | "sm" | "md" | "lg" | "xl";

interface IAlignOrJustifyOptions {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

interface IOffsetOptions {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface IOrderOptions {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface IGrid {
  children: React.ReactNode;
  style?: React.CSSProperties;
  debug?: boolean;
}

interface IGridContainerProps extends IGrid {
  fluid?: boolean;
}

interface IGridRowProps extends IGrid {
  reverse?: boolean | IGridBreakpoints[];
  align?: string | object;
  justify?: string | object;
}

interface IGridColProps extends IGrid {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  offset?: number | IOffsetOptions;
  order?: number | IOrderOptions;
  reverse?: boolean | IGridBreakpoints[];
  align?: string | IAlignOrJustifyOptions;
  justify?: string | IAlignOrJustifyOptions;
  noGutter?: boolean;
}

interface IVisibleProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  children: React.ReactNode;
}

interface IHiddenProps {
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  children: React.ReactNode;
}

interface IScreenClassProps {
  render: (screen: IGridBreakpoints) => React.ReactNode;
}

interface IConfig {
  media: Record<IGridBreakpoints, ThemedCssFunction<DefaultTheme>>;
  mediaQuery: string;
  columns: Record<IGridBreakpoints, number>;
  gutterWidth: Record<IGridBreakpoints, number>;
  paddingWidth: Record<IGridBreakpoints, number>;
  container: Record<IGridBreakpoints, number | string>;
  breakpoints: Record<IGridBreakpoints, number>;
}

type IConfigProps = ThemeProps<{ awesomegrid: Partial<IConfig> }>;

interface IUtil {
  getScreenClass: (props?: IConfigProps) => IGridBreakpoints;
  getViewPort: () => number | null;
}

export const Container: React.FC<IGridContainerProps>;
export const Row: React.FC<IGridRowProps>;
export const Col: React.FC<IGridColProps>;
export const Visible: React.FC<IVisibleProps>;
export const ScreenBadge: React.FC;
export const ScreenClass: React.FC<IScreenClassProps>;
export const Hidden: React.FC<IHiddenProps>;
export const config: (props: IConfigProps) => IConfig;
export const util: IUtil;
