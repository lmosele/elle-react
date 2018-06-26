import { css } from 'styled-components';
import normalize from './normalize';
import theme from './theme-constants';

const baseStyles = css`
 * {
    box-sizing: border-box;
    font-family: 'Lato', 'Verdana', 'sans-serif';
    color:  ${theme.colors.textColor};
    &:before, &:after {
      box-sizing: border-box;
    }
  }
`;

export default theme;
export { normalize, baseStyles };
