import { Title } from 'react-native-paper';
import styled from 'styled-components/native';

import { CenterContainer } from '@components/atoms/center-container';
import { TextComponent } from '@components/atoms/text-component';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import { Z_INDEX } from '@theme/z-index';

export const ImmersionChangeStyled = {
  ImmersionChange: styled.View`
    flex: 1;
  `,

  SafeAreaView: styled.SafeAreaView`
    z-index: ${Z_INDEX.alwaysTop};
  `,

  ProgressBar: styled(CenterContainer)`
    z-index: ${Z_INDEX.alwaysTop};
    margin: 36px 0;
  `,

  ButtonWrapper: styled.View`
    padding: 24px;
    background-color: ${COLOR.background.white};
    border-radius: 18px;
    box-shadow: 0px -10px 7px rgba(0, 0, 0, 0.1);
  `,

  ModalButtonWrapper: styled.View`
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    border-radius: 18px;
    margin: 28px;
    box-shadow: 0px -10px 7px rgba(0, 0, 0, 0.1);
    background-color: ${COLOR.background.white};
  `,

  MainSection: styled.View`
    flex: 1;
    margin: 0 24px;
  `,

  Image: styled.Image`
    position: absolute;
    left: -24px;
    bottom: -93px;
  `,

  Title: styled(Title)`
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    margin: 16px 0 8px;
  `,

  Subtitle: styled(TextComponent)`
    font-size: ${FONTS.size.xMedium}px;
    line-height: 19px;
    color: ${COLOR.subheading};
    margin-bottom: 16px;
    max-width: 70%;
  `,

  ModalTitle: styled(TextComponent)`
    font-size: ${FONTS.size.xMedium}px;
    line-height: 19px;
    color: ${COLOR.subheading};
    margin-bottom: 16px;
    max-width: 70%;
    text-align: center;
  `,
};
