import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';

import { GoalItem } from '../goal-item';

import { ITEM_WIDTH, LINEAR_GRADIENT_CONFIG } from './goal-picker.constants';

import { IGoalPickerProps } from './goal-picker.typings';

import { linerarGradient, StyledGoalPicker as Styled } from './goal-picker.styles';

export const GoalPicker: React.FC<IGoalPickerProps> = props => {
  const { onGoalChange, defaultIndex, data } = props;

  const rednerItem = (goal: number) => <GoalItem goal={goal} itemWidth={ITEM_WIDTH} />;

  return (
    <Styled.GoalPicker>
      <HorizontalPicker
        animatedScrollToDefaultIndex
        defaultIndex={defaultIndex}
        data={data}
        renderItem={rednerItem}
        itemWidth={ITEM_WIDTH}
        onChange={onGoalChange}
      />
      <LinearGradient
        pointerEvents="none"
        style={linerarGradient}
        colors={LINEAR_GRADIENT_CONFIG.colors}
        start={LINEAR_GRADIENT_CONFIG.start}
        end={LINEAR_GRADIENT_CONFIG.end}
      />
    </Styled.GoalPicker>
  );
};
