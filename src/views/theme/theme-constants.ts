/* tslint:disable object-literal-sort-keys */
import { css } from 'styled-components';
import { IthemeInterface } from '../../types/theme-types';

const theme: IthemeInterface = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 1, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 42, // rem
      md: 61, // rem
      lg: 76,  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75,  // em
    },
  },
  colors: {
    bgColor: '#',
    containerBgColor: '#',
    accentColor: '#',
    accentColorHover: '#',
    primaryColor: '#',
    primaryColorActive: '#',
    secondaryColor: '#',
    secondaryColorActive: '#',
    errorColor: '#',
    errorColorHover: '#',
    successColor: '#',
    successColorHover: '#',
    warningColor: '#',
    warningColorHover: '#',
    textColor: '#',
    invertTextColor: '#',
  },
};

export default theme;
