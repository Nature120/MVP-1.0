import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SubscribeStyled = {
  ImageBackground: styled.ImageBackground`
    flex: 1;
    padding-top: 8px;
  `,
  Container: styled.View`
    margin-top: 50px;
    flex: 1;
  `,
  Header: styled.View`
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
