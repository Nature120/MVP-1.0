import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { DEVICE_WIDTH, isIOS } from '@services/helpers/device-utils';

import { TStyles } from '@typings/common';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledImage: TStyles = {
  borderRadius: 18,
  width: '100%',
};

const rightWidthPercent = 44;
export const COLLAPSED_HEIGHT = 100;
export const IMAGE_WIDTH = (DEVICE_WIDTH * rightWidthPercent) / 100;

export const StyledPracticeLibraryCollapsed = {
  TypeContainer: styled.View`
    padding: 4px 4px;
    border-radius: 100px;
    position: absolute;
    left: 8px;
    bottom: 8px;
    background: ${COLOR.background.dark};
    align-items: center;
    justify-content: center;
  `,

  Type: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.small}px;
    line-height: 12px;
    color: ${COLOR.font.white};
  `,

  CollapsedLibrary: styled.TouchableOpacity`
    width: 100%;
    height: ${COLLAPSED_HEIGHT}px;
    margin-top: ${moderateScale(35)}px;
    margin-bottom: ${moderateScale(25)}px;
    background-color: ${COLOR.background.extraLightMint};
    flex-direction: row;
    border-radius: 18px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);

    ${!isIOS &&
    css`
      shadow-color: ${COLOR.shadow.black};
      shadow-offset: 0px -5px;
      shadow-opacity: 0.37;
      shadow-radius: 6.68px;
      elevation: 11;
    `}
  `,

  Left: styled.View`
    padding: 22px 16px;
    width: 56%;
  `,

  Title: styled(Title)`
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 20px;
    margin-bottom: 4px;
  `,

  Description: styled(TextComponent)`
    font-size: 13px;
    line-height: 16px;
    color: ${COLOR.subheading};
  `,

  Right: styled.View`
    width: ${rightWidthPercent}%;
  `,
  PlayerWrapper: styled.View`
    position: absolute;
    top: 25px;
    right: 30px;
  `,
};
