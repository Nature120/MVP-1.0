import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import styled from 'styled-components/native';

import { RINGS_SIZE } from '@components/organisms/rings/rings.constants';

import { ITEM_WIDTH } from './modal-change-goal.constants';

import { TViewProps } from '@typings/common';

import { TextComponent } from '@theme/components';
import { FONTS } from '@theme/fonts';

export const linerarGradient: TViewProps = {
  ...StyleSheet.absoluteFillObject,
};

export const StyledModalChangeGoal = {
  ModalText: styled(Title)`
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    text-align: center;
    margin: 43px 0 24px;
  `,

  EditGoal: styled.TouchableOpacity`
    position: absolute;
    top: 17%;
    left: ${RINGS_SIZE / 2 - 25 / 2}px;
    z-index: 20;
  `,

  Container: styled.View`
    margin-top: 24px;
    margin-bottom: 44px;
  `,

  Item: styled.View`
    width: ${ITEM_WIDTH}px;
    justify-content: center;
    align-items: center;
  `,

  DailyText: styled(TextComponent)`
    font-size: ${FONTS.size.xLmedium}px;
    line-height: ${FONTS.size.xLmedium}px;
  `,

  MinDayText: styled(TextComponent)`
    font-size: ${FONTS.size.xSmall}px;
    line-height: ${FONTS.size.xSmall}px;
  `,

  WeeklyText: styled(TextComponent)`
    font-size: ${FONTS.size.xlLarge}px;
    line-height: ${FONTS.size.xlLarge}px;
  `,

  Bottom: styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  `,

  MinDay: styled.View`
    margin-left: 5px;
  `,
};
