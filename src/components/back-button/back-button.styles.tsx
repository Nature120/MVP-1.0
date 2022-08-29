import { FlattenInterpolation } from 'styled-components';
import styled, { ThemeProps } from 'styled-components/native';

export const BackButtonStyles = {
  Container: styled.View<{ cssContainer?: FlattenInterpolation<ThemeProps<any>> }>`
    ${({ cssContainer }) => cssContainer}
  `,
  BtnWrapper: styled.TouchableOpacity<{ cssButton?: FlattenInterpolation<ThemeProps<any>> }>`
    ${({ cssButton }) => cssButton};
  `,
};
