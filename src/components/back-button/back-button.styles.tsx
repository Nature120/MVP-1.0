import styled from 'styled-components/native';

import { TStyles } from '@typings/common';

export const BackButtonStyles = {
  BtnWrapper: styled.TouchableOpacity<{ cssButton?: TStyles }>`
    ${({ cssButton }) => cssButton};
  `,
};
