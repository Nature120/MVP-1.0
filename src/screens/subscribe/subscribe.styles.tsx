import { scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SubscribeStyled = {
  MainWrapper: styled.View`
    flex: 1;
    width: 100%;
    padding-horizontal: 24px;
    padding-top: 24px;
    padding-bottom: 40px;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,
  Header: styled.View`
    margin-top: ${scale(8)}px;
    margin-bottom: 16px;
    align-items: flex-end;
    margin-horizontal: 24px;
  `,
  Title: styled.Text`
    margin-left: 24px;
    margin-bottom: 16px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.semiBold};
    color: ${COLOR.font.darkBlue};
  `,
};
