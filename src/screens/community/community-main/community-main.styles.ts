import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const CommunityMainStyled = {
  SafeAreaView: styled.SafeAreaView`
    flex: 1;
  `,
  Container: styled.View`
    flex: 1;
    padding-top: 34px;
    margin-bottom: 50px;
    padding-horizontal: 24px;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background-color: ${COLOR.background.darkWhite};
  `,
  SubTitle: styled.Text`
    margin-bottom: 24px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.large}px;
    line-height: 28.8px;
    color: ${COLOR.title};
  `,
  TeacherWrapperCard: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  `,
  RightWrapperCard: styled.View`
    flex-direction: column;
  `,
  Image: css`
    margin-right: 8px;
    border-radius: 8px;
  `,
  FullNameText: styled.Text`
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    color: ${COLOR.title};
  `,
  Text: styled.Text`
    width: 180px;
    margin-right: 10px;
    font-family: ${FONTS.family.lightBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16px;
    color: ${COLOR.subheading};
  `,
  FollowBtn: styled.TouchableOpacity`
    width: 65px;
    height: 25px;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    background-color: ${COLOR.primary.green};
  `,
  FollowBtnText: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16.25px;
    color: ${COLOR.font.white};
  `,
};
