import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TeacherProfileInfoStyled = {
  Container: styled.View`
    margin-bottom: 35px;
    padding-horizontal: 24px;
  `,
  AvatarBackground: styled.View`
    width: 140px;
    height: 140px;
    position: absolute;
    top: -80px;
    left: 24px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background-color: ${COLOR.background.darkWhite};
  `,
  Avatar: css`
    border-radius: 100px;
  `,
  TitleText: styled.Text<{ marginTop: number }>`
    margin-top: ${({ marginTop }) => marginTop}px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.largeM}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: 40.8px;
    color: ${COLOR.font.darkBlue};
  `,
  LocationWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `,
  TextLocation: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.medium};
    line-height: 19px;
    color: ${COLOR.subheading};
  `,
  MapPinIcon: css`
    margin-right: 8px;
  `,
};
