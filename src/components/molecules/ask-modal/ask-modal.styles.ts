import styled from 'styled-components/native';

import { Title } from '@components/atoms/title';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const ICON_PADDING = 14;

export const StyledAskModal = {
  ModalText: styled(Title)<{ marginTop: number; marginBottom?: number }>`
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    text-align: center;
    margin: ${({ marginTop, marginBottom }) => `${marginTop}px 0 ${marginBottom || 24}px `};
  `,

  SelectedIcon: styled.View<{ logoSize: number }>`
    background-color: ${COLOR.background.white};
    width: ${({ logoSize }) => logoSize + ICON_PADDING}px;
    height: ${({ logoSize }) => logoSize + ICON_PADDING}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${({ logoSize }) => DEVICE_WIDTH / 2 - (logoSize + ICON_PADDING) / 2}px;
    top: -${({ logoSize }) => logoSize / 2 - 8}px;
    border-radius: ${({ logoSize }) => logoSize}px;
  `,

  Description: styled.Text`
    margin-top: 20px;
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16px;
    color: ${COLOR.subheading};
    margin-bottom: 48px;
  `,

  TextInput: styled.TextInput<{ marginBottom: number }>`
    margin-bottom: ${({ marginBottom }) => marginBottom}px;
    padding: 8px;
    border-radius: 5px;
    max-height: 97px;
    height: 97px;
    background-color: ${COLOR.background.textInput};
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 21px;
    color: ${COLOR.font.cloudyBlue};
    text-align-vertical: top;
  `,
};
