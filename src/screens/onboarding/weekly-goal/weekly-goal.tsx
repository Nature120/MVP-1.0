import React from 'react';

import { Layout } from '@components/molecules/layout';
import { WeeklyGoalCheckboxGroup } from '@components/molecules/weekly-goal-checkbox-group';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { Header } from './molecules/header';
import { useWeeklyGoal } from './weekly-goal.state';

import { weeklyGoalVariants } from '../onboarding.constants';

import { StyledWeeklyGoal as Styled } from './weekly-goal.styles';

export const WeeklyGoal: React.FC = () => {
  const { selectedGoal, onChangeGoal, onPress } = useWeeklyGoal();

  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding
        buttonText="SET GOAL"
        isButtonWithLink
        routeText="Skip for now"
        onPress={onPress}
        isButtonDisabled={!selectedGoal}>
        <Header />

        <Styled.CheckboxGroup>
          <WeeklyGoalCheckboxGroup variants={weeklyGoalVariants} gap={14} onChange={onChangeGoal} />
        </Styled.CheckboxGroup>
      </LayoutOnboarding>
    </Layout>
  );
};
