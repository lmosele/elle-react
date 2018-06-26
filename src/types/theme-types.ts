// Types for our global theme object
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

// This allows me to access the theme object from any component without making typescript hate me
export interface IStyledProps {
  theme?: IthemeInterface;
}
