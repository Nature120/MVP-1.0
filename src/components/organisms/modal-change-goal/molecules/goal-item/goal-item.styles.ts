import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';

import { FONTS } from '@theme/fonts';

export const StyledGoalItem = {
  GoalItem: styled.View<{ itemWidth: number }>`
    width: ${({ itemWidth }) => itemWidth}px;
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
