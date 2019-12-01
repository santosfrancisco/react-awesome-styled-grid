import * as React from 'react';

type IGridBreakpoints = 'xs' | 'sx' | 'md' | 'lg' | 'xl';

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

interface IGridContainerProps {
  debug?: boolean;
  fluid?:boolean;
  children: React.ReactNode;
}

interface IGridRowProps {
  reverse?: boolean | IGridBreakpoints[];
  align?: string | object;
  justify?: string | object;
  debug?: boolean;
  children: React.ReactNode;
}

interface IGridColProps {
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
  debug?: boolean;
  children: React.ReactNode;
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