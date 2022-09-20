import React from 'react';

import { IGoalTextProps } from './goal-text.typings';

import { StyledGoalText as Styled } from './goal-text.styles';

import { COLOR } from '@theme/colors';

export const GoalText: React.FC<IGoalTextProps> = props => {
  const { inputRef, maxMinutes, minutes, addedTime } = props;

  const inferredTextColor = addedTime ? COLOR.primary.green : COLOR.font.darkBlue;

  return (
    <Styled.AnimatedTextInput
      textColor={inferredTextColor}
      ref={inputRef}
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue="0"
      multiline>
      <Styled.Min textColor={inferredTextColor}>min</Styled.Min>

      {addedTime ? (
        <Styled.WeeklyGoal isAddedTime>
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
  );
};
