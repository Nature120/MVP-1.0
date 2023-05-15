import { Title } from 'react-native-paper';
import styled from 'styled-components/native';

import { CenterContainer } from '@components/atoms/center-container';
import { TextComponent } from '@components/atoms/text-component';

import { DEVICE_WIDTH } from '../../services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import { Z_INDEX } from '@theme/z-index';

export const StyledImmersionComplete = {
  ImmersionComplete: styled.View`
    flex: 1;
  `,

  SafeAreaView: styled.SafeAreaView`
    z-index: ${Z_INDEX.alwaysTop};
  `,

  ProgressBar: styled(CenterContainer)`
    z-index: ${Z_INDEX.alwaysTop};
    margin-bottom: 36px;
  `,

  ButtonWrapper: styled.View`
    padding: 24px;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    box-shadow: 0px -10px 7px rgba(0, 0, 0, 0.1);
  `,

  MainSection: styled.View`
    flex: 1;
    margin-horizontal: 24px;
  `,

  Image: styled.Image`
    position: absolute;
    left: -24px;
    bottom: -93px;
    width: ${DEVICE_WIDTH}px;
  `,

  Title: styled(Title)`
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    margin: 16px 0 8px;
  `,

  Subtitile: styled(TextComponent)`
    font-size: ${FONTS.size.xMedium}px;
    line-height: 19px;
    color: ${COLOR.subheading};
    margin-bottom: 16px;
    max-width: 70%;
  `,

  InfoSectionWrapper: styled.View`
    padding: 36px 0 24px;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  InfoSection: styled.View`
    margin-horizontal: 24px;
  `,
};
