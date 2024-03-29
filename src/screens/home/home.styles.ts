import styled from 'styled-components/native';

import { Title } from '@components/atoms/title';

import { DEVICE_WIDTH, isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const BURGER_MENU_WIDTH = 31;
export const PAGE_PADDING = 24;

export const StyledHome = {
  MainSection: styled.View`
    flex: 1;
    margin-horizontal: 24px;
  `,

  Header: styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 16px 0 8px;
  `,

  Greeting: styled(Title)`
    font-weight: ${FONTS.weight.bold};
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    width: ${DEVICE_WIDTH - PAGE_PADDING * 2 - BURGER_MENU_WIDTH - PAGE_PADDING}px;
  `,

  ButtonWrapper: styled.View`
    margin: 36px 0;
  `,

  WeekRange: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xSmall}px;
    color: ${COLOR.subheading};
    margin-bottom: 16px;
  `,

  InfoSectionWrapper: styled.View`
    padding-top: 36px;
    padding-bottom: ${isIOS ? 56 + PAGE_PADDING : 71 + PAGE_PADDING}px;

    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  InfoSection: styled.View`
    margin-horizontal: ${PAGE_PADDING}px;
  `,
};
