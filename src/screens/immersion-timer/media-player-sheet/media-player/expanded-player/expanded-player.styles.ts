import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const ExpendedPlayerStyled = {
  Container: styled.View`
    flex: 1;
    padding-top: 5px;
    padding-bottom: 10px;
  `,
  MoveLabel: styled.View`
    width: 65px;
    height: 3px;
    align-self: center;
    margin-bottom: 25.6px;
    border-radius: 8px;
    background-color: ${COLOR.background.rectangularSwiper};
  `,
  WrapperTrackInfo: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  `,
  RightSideWrapper: styled.View`
    flex-direction: column;
    margin-left: 10px;
  `,
  Image: css`
    border-radius: 8px;
  `,
  TitleInfo: styled.Text`
    margin-bottom: 8px;
    width: ${moderateScale(220)}px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.xlSmall}px;
    font-weight: ${FONTS.weight.semiBold};
    color: ${COLOR.font.darkBlue};
  `,
  TextInfo: styled.Text`
    margin-bottom: 5px;
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.font.cloudyBlue};
  `,
  AuthorText: styled.Text`
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.semiBold};
    color: ${COLOR.font.darkBlue};
  `,
  RepeatBtn: styled.TouchableOpacity`
    align-self: flex-end;
    margin-bottom: 15px;
  `,
  MediaPlayerWrapper: styled.View`
    margin-bottom: 16px;
  `,
  CurrentAudioTimerText: styled.Text`
    margin-bottom: 50px;
    align-self: center;
    font-family: ${FONTS.family.boldAcumin};
    font-size: ${FONTS.size.large}px;
    font-weight: ${FONTS.weight.semiBold};
    color: ${COLOR.font.darkBlue};
  `,
  TimerInfoWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  TimeInfoText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.medium}px;
    font-weight: ${FONTS.weight.regular};
    color: ${COLOR.font.darkBlue};
  `,
  ButtonsWrapper: styled.View`
    margin-horizontal: 40px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  Button: styled.TouchableOpacity<{ isRotate?: boolean }>`
    transform: ${({ isRotate }) => (isRotate ? 'rotate(180deg)' : 'rotate(0deg)')};
  `,
  Slider: css`
    width: 24px;
    height: 24px;
  `,
};
