import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const ButtonConfirmationStyled = {
  Container: styled.View<{ title: string }>`
    width: ${({ title }) => (title === 'terms' ? 200 : 110)}px;
    margin-bottom: ${({ title }) => (title === 'terms' ? 10 : 20)}px;
  `,
  Btn: styled.TouchableWithoutFeedback``,
  BtnWrapper: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  TitleWrapper: styled.View`
    flex-direction: row;
    margin-left: 8px;
    align-items: flex-end;
  `,
  TitleText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.light};
    color: ${COLOR.font.darkBlue};
  `,
  TitleBtnLink: styled.TouchableWithoutFeedback``,
  TitleBtnLinkText: styled.Text`
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.background.blue};
  `,
};
