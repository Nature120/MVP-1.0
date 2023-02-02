import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const AdditionalInfoStyled = {
  Container: styled.View<{ isAudioFile: boolean }>`
    flex: 1;
    padding-top: 26px;
    flex-direction: row;
    justify-content:${({ isAudioFile }) => (isAudioFile ? 'space-between' : 'flex-start')}
    border-top-width: 1px;
    border-top-color: ${COLOR.background.textInput};
    border-top-style: solid;
  `,
  InfoWrapper: styled.View<{ isAudioFile?: boolean }>`
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${moderateScale(93)}px;
    height: ${verticalScale(40)}px;
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.medium};
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
  `,
};
