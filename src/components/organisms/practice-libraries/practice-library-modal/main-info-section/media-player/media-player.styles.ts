import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const MediaPlayerStyled = {
  Container: styled.View`
    flex: 1;
    min-height: 350px;
  `,
  WrapperAuthorInfo: styled.View`
    margin-bottom: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  AuthorText: styled.Text`
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${FONTS.size.medium}px;
    font-weight: ${FONTS.weight.regular};
    color: ${COLOR.font.darkBlue};
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
    margin-bottom: 50px;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  Button: styled.TouchableOpacity<{ isRotate?: boolean }>`
    transform: ${({ isRotate }) => (isRotate ? 'rotate(180deg)' : 'rotate(0deg)')};
  `,
  Slider: css`
    width: 100%;
    height: 20px;
  `,
};
