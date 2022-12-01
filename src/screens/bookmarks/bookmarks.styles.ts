import styled, { css } from 'styled-components/native';

import { COLOR } from './../../theme/colors';

export const BookMarksStyled = {
  MainContainer: styled.SafeAreaView`
    flex: 1;
    background-color: ${COLOR.background.white};
  `,
  BackButtonStyle: css`
    padding-top: 20px;
    padding-left: 15px;
    margin-bottom: 10px;
  `,
  ItemContainer: styled.View`
    margin-bottom: 30px;
  `,
};
