import { scale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TeacherPracticesStyled = {
  Columns: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  `,
  CardWrapperButton: styled.TouchableOpacity`
    flex-direction: column;
    width: ${scale(140)}px;
    height: 183px;
    margin-bottom: 24px;
  `,
  CategoryWrapper: styled.View`
    position: absolute;
    padding: 8px 12px;
    border-radius: 100px;
    left: 5px;
    top: 65px;
    background: ${COLOR.background.dark};
    align-items: center;
    justify-content: center;
  `,
  CategoryText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.small}px;
    line-height: 12.5px;
    color: ${COLOR.font.white};
  `,
  WrapperTitle: styled.View`
    flex-direction: row;
  `,
  Title: styled.Text`
    margin-bottom: 8px;
    // width: ${scale(100)}px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xLarge}px;
    line-height: 36px;
    color: ${COLOR.font.darkBlue};
  `,
  LockSvg: css`
    margin-right: 8px;
  `,
  SubTitle: styled.Text`
    margin-bottom: 24px;
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
  `,
  CardTitle: styled.Text`
    width: ${scale(110)}px;
    margin-bottom: 4px;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    color: ${COLOR.font.darkBlue};
  `,
  CardInfo: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16.25px;
    color: ${COLOR.subheading};
  `,
  Image: css`
    margin-bottom: 8px;
    border-radius: 10px;
  `,
};
