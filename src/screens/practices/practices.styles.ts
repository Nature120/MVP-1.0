import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const StyledPractices = {
  Practices: styled.SafeAreaView`
    margin-vertical: 30px;
    flex: 1;
  `,

  BackButtonWrapper: styled.View`
    margin: 24px 0 0 24px;
  `,

  LayoutContent: styled.SafeAreaView`
    flex: 1;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,
};
