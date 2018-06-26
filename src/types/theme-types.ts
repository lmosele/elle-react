export interface IthemeInterface {
  flexboxgrid: {
    gridSize: number;
    gutterWidth: number;
    outerMargin: number;
    mediaQuery: string;
    container: {
      xs?: number;
      sm?: number;
      md?: number;
      lg?: number;
    };
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
    };
  };
  colors?: any;
}

export interface IStyledProps {
  theme?: IthemeInterface;
}
