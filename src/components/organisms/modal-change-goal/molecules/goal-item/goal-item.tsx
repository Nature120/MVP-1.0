import React from 'react';

import { Line } from '@components/atoms/line';

import { GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

import { IGoalItemProps } from './goal-item.typings';

import { StyledGoalItem as Styled } from './goal-item.styles';

export const GoalItem: React.FC<IGoalItemProps> = ({ goal, itemWidth }) => {
  return (
    <Styled.GoalItem itemWidth={itemWidth}>
      <Styled.WeeklyText>{GOAL_HASH_MAP()[goal]}</Styled.WeeklyText>
      <Line marginTop={5} marginBottom={10} width={60} />

      <Styled.Bottom>
        <Styled.DailyText>{goal}</Styled.DailyText>

        <Styled.MinDay>
          <Styled.MinDayText>min</Styled.MinDayText>
          <Line marginTop={2} marginBottom={2} />
          <Styled.MinDayText>day</Styled.MinDayText>
        </Styled.MinDay>
      </Styled.Bottom>
    </Styled.GoalItem>
  );
};
