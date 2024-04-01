import React from 'react';

import { IGoalTextProps } from './goal-text.typings';

import { StyledGoalText as Styled } from './goal-text.styles';

import { COLOR } from '@theme/colors';

export const GoalText: React.FC<IGoalTextProps> = props => {
  const { inputRef, maxMinutes, minutes, addedTime } = props;

  const isAddedTime = !!addedTime?.toString();
  const inferredTextColor = isAddedTime ? COLOR.primary.green : COLOR.font.darkBlue;

  return (
    <Styled.AnimatedTextInput
      minutesLength={minutes.toString().length}
      textColor={inferredTextColor}
      ref={inputRef}
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue="0"
      multiline>
      <Styled.Min textColor={inferredTextColor}>min</Styled.Min>

      {isAddedTime ? (
        <Styled.WeeklyGoal isAddedTime>
          {'\n'}
          {minutes} / {maxMinutes} min
        </Styled.WeeklyGoal>
      ) : (
        <Styled.WeeklyGoal>
          {'\n'}Weekly goal:{'\n'}
          {maxMinutes} min
        </Styled.WeeklyGoal>
      )}
    </Styled.AnimatedTextInput>
  );
};
