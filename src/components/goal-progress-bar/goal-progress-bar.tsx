import React from 'react';
import { StyleSheet } from 'react-native';

import { CircleProgressBar } from './circle-progress-bar';
import { useGoalProgressBar } from './goal-progress-bar.state';

import { IGoalProgressBarProps } from './goal-progress-bar.typings';

import { StyledGoalProgressBar as Styled } from './goal-progress-bar.styles';

import { COLOR } from '@theme/colors';

export const GoalProgressBar: React.FC<IGoalProgressBarProps> = props => {
  const {
    strokeWidth = 15,
    color = COLOR.primary.lightGreen,
    textColor = COLOR.text,
    rotation = 90,
    ...restProps
  } = props;

  const { addedTime, minutes, maxMinutes, size, circleRef, circumference, inputRef } = useGoalProgressBar(restProps);

  const inferredTextColor = addedTime ? COLOR.primary.green : textColor || color;
  return (
    <Styled.Wrapper>
      <Styled.GoalProgressBar size={size}>
        <CircleProgressBar
          circleRef={circleRef}
          circumference={circumference}
          color={color}
          rotation={rotation}
          size={size}
          strokeWidth={strokeWidth}
        />

        <Styled.AnimatedTextInput
          textColor={inferredTextColor}
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          multiline
          style={StyleSheet.absoluteFillObject}>
          <Styled.Min textColor={inferredTextColor}>min</Styled.Min>
          {addedTime ? (
            <Styled.WeeklyGoal>
              {'\n'}
              {minutes + addedTime} / {maxMinutes} min
            </Styled.WeeklyGoal>
          ) : (
            <Styled.WeeklyGoal>
              {'\n'}Weekly goal:{'\n'}
              {maxMinutes} min
            </Styled.WeeklyGoal>
          )}
        </Styled.AnimatedTextInput>
      </Styled.GoalProgressBar>
    </Styled.Wrapper>
  );
};
