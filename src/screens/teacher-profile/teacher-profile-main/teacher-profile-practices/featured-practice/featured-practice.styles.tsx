import { scale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const FeaturedPracticeStyled = {
  ContainerBtn: styled.TouchableOpacity`
    flex: 1;
    margin-bottom: 73px;
  `,
  ImageWrapper: styled.View`
    margin-bottom: 24px;
  `,
  Image: css`
    border-radius: 10px;
  `,
  CategoryWrapper: styled.View`
    position: absolute;
    padding: 8px 12px;
    border-radius: 100px;
    left: 8px;
    bottom: 8px;
    background: ${COLOR.background.dark};
    align-items: center;
    justify-content: center;
  `,
  CategoryText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.font.white};
  `,
  WrapperTitle: styled.View`
    margin-bottom: 8px;
    flex-direction: row;
    align-items: flex-start;
  `,
  LockSvg: css`
    margin-right: 10px;
  `,
  Title: styled.Text`
    width: ${scale(273)}px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.large}px;
    line-height: 28.8px;
    color: ${COLOR.primary.darkBlue};
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18.75px;
    color: ${COLOR.subheading};
  `,
};
