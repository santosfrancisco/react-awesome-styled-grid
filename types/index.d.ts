import * as React from 'react';

type IGridBreakpoints = 'xs' | 'sx' | 'md' | 'lg' | 'xl';
type IGridXSSizes = 1 | 2 | 3 | 4 | '1' | '2' | '3' | '4';
type IGridSMSizes = IGridXSSizes | 5 | 6 | 7 | 8 | '5' | '6' | '7' | '8';
type IGridMDSizes = IGridSMSizes;
type IGridLGSizes = IGridMDSizes | 9 | 10 | 11 | 12 | '9' | '10' | '11' | '12';
type IGridXLSizes = IGridLGSizes;

interface IOffsetOptions {
  xs?: IGridXSSizes;
  sm?: IGridSMSizes;
  md?: IGridMDSizes;
  lg?: IGridLGSizes;
  xl?: IGridXLSizes;
}

interface IGridContainerProps {
  debug?: boolean;
  fluid?:boolean;
  children: React.ReactNode;
}

interface IGridRowProps {
  reverse?: number | IGridBreakpoints[];
  debug?: boolean;
  children: React.ReactNode;
}

interface IGridColProps {
  xs?: IGridXSSizes;
  sm?: IGridSMSizes;
  md?: IGridMDSizes;
  lg?: IGridLGSizes;
  xl?: IGridXLSizes;
  offset?: number | IOffsetOptions;
  reverse?: number | IGridBreakpoints[];
  noGutter?: boolean;
  debug?: boolean;
  children: React.ReactNode;
}

export const Container: React.FC<IGridContainerProps>;
export const Row: React.FC<IGridRowProps>;
export const Col: React.FC<IGridColProps>;