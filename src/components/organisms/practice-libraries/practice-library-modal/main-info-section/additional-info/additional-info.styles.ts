import { scale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const infoWrapperShareStyles = css`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${scale(95)}px;
  height: 40px;
`;

export const AdditionalInfoStyled = {
  Container: styled.View<{ isAudioFile: boolean }>`
    flex: 1;
    padding-top: 26px;
    flex-direction: row;
    justify-content: ${({ isAudioFile }) => (isAudioFile ? 'space-between' : 'flex-start')};
    border-top-width: 1px;
    border-top-color: ${COLOR.background.textInput};
    border-top-style: solid;
  `,
  InfoCardWrapper: styled.View`
    ${infoWrapperShareStyles}
  `,
  SeasonCardWrapper: styled.View<{ isAudioFile?: boolean }>`
    ${infoWrapperShareStyles}
    margin-right: ${({ isAudioFile }) => (isAudioFile ? scale(0) : scale(10))}px;
  `,
  Text: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    font-weight: ${FONTS.weight.medium};
    line-height: 16.25px;
    color: ${COLOR.font.cloudyBlue};
  `,
};
