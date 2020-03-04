import * as React from 'react';

type IGridBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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

interface IGrid {
  children: React.ReactNode;
  style?: React.CSSProperties;
  debug?: boolean;
}

interface IGridContainerProps extends IGrid {
  fluid?:boolean;
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

export const Container: React.FC<IGridContainerProps>;
export const Row: React.FC<IGridRowProps>;
export const Col: React.FC<IGridColProps>;
export const Visible: React.CElement<IVisibleProps>;
export const Hidden: React.CElement<IHiddenProps>;