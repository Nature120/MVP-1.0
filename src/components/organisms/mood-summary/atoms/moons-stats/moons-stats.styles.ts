import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {
  COLUMN_WIDTH,
  FIRST_COLUMN_WIDTH,
  ITEM_HEIGHT,
  MARGIN_BOTTOM,
  STATS_CANVAS_WIDTH,
} from '../../moods-summary.constants';

import { IStyledMark } from './moons-stats.typings';

import { COLOR } from '@theme/colors';

const getWidth = (assessment?: number) => {
  return assessment ? FIRST_COLUMN_WIDTH + COLUMN_WIDTH * (assessment - 1) + 1 : 0;
};

export const StyledMoonsStats = {
  Row: styled.View<{ isLastRow: boolean }>`
    width: ${STATS_CANVAS_WIDTH}px;
    height: ${ITEM_HEIGHT}px;
    margin-bottom: ${({ isLastRow }) => (isLastRow ? 0 : MARGIN_BOTTOM)}px;
    justify-content: space-between;
  `,

  Mark: styled(Animated.View)<IStyledMark>`
    height: 13px;
    border-radius: 3px;
    width: ${({ assessment }) => getWidth(assessment)}px;
    background-color: ${({ type }) => COLOR.moon[type]};
  `,
};
