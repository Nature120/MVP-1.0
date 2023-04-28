import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';

import { ITEM_WIDTH, LINEAR_GRADIENT_CONFIG } from './goal-picker.constants';

import { IGoalPickerProps } from './goal-picker.typings';

import { linearGradient, StyledGoalPicker as Styled } from './goal-picker.styles';

const { colors, start, end } = LINEAR_GRADIENT_CONFIG;

export const GoalPicker: React.FC<IGoalPickerProps> = ({ onGoalChange, renderItem, defaultIndex, data }) => {
  return (
    <Styled.GoalPicker>
      <HorizontalPicker
        animatedScrollToDefaultIndex
        defaultIndex={defaultIndex}
        data={data}
        renderItem={renderItem}
        itemWidth={ITEM_WIDTH}
        onChange={onGoalChange}
      />
      <LinearGradient pointerEvents="none" style={linearGradient} colors={colors} start={start} end={end} />
    </Styled.GoalPicker>
  );
};
