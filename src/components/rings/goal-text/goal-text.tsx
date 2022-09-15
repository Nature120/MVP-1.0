import React from 'react';

import { IGoalTextProps } from './goal-text.typings';

import { StyledGoalText as Styled } from './goal-text.styles';

import { COLOR } from '@theme/colors';

export const GoalText: React.FC<IGoalTextProps> = props => {
  const { inputRef, maxMinutes } = props;

  return (
    <Styled.AnimatedTextInput
      textColor={COLOR.font.darkBlue}
      ref={inputRef}
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue="0"
      multiline>
      <Styled.Min textColor={COLOR.font.darkBlue}>min</Styled.Min>

      <Styled.WeeklyGoal>
        {'\n'}Weekly goal:{'\n'}
        {maxMinutes} min
      </Styled.WeeklyGoal>
    </Styled.AnimatedTextInput>
  );
};
