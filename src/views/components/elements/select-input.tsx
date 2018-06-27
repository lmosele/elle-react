import styled from 'styled-components';
import { ITheme } from '../../../types/theme-types';

export const SelectInput = styled.select`
  border-radius: 4px;
  background-color: ${(props: ITheme) => props.theme.colors.gray};
  color: white;
  height: 30px;
  min-width: 150px;
`;
