import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const CommunitySplashMainStyled = {
  Container: styled.View`
    flex: 1;
    padding-top: 36px;
    padding-horizontal: 26px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background-color: ${COLOR.background.darkWhite};
  `,
  Title: styled.Text`
    margin-bottom: 16px;
    font-family: ${FONTS.family.boldAcumin};
    font-size: ${FONTS.size.largeM}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 36px;
    color: ${COLOR.font.darkBlue};
  `,
  Text: styled.Text<{ isMarginBottom: boolean }>`
    margin-bottom: ${({ isMarginBottom }) => (isMarginBottom ? 24 : 0)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.regular};
    line-height: 18.75px;
    color: ${COLOR.subheading};
  `,
  WrapperList: styled.View`
    flex-direction: column;
    padding-top: 32px;
    border-top-width: 1px;
    border-top-color: ${COLOR.background.textInput};
  `,
  WrapperItem: styled.View`
    width: ${moderateScale(250)}px;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 56px;
  `,
  RightWrapper: styled.View`
    flex-direction: column;
  `,
  SubTitle: styled.Text`
    font-family: ${FONTS.family.boldAcumin};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 28.8px;
    color: ${COLOR.font.darkBlue};
  `,
  Image: styled.Image`
    width: 60px;
    height: 60px;
    margin-right: 18px;
  `,
};
