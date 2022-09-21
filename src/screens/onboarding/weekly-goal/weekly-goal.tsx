import React from 'react';

import { Layout } from '@components/molecules/layout';
import { WeeklyGoalCheckboxGroup } from '@components/molecules/weekly-goal-checkbox-group';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { useWeeklyGoal } from './weekly-goal.state';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { weeklyGoalVariants } from '../onboarding.constants';

import { StyledWeeklyGoal as Styled } from './weekly-goal.styles';

import { OnboardingText, OnboardingTitle } from '@theme/components';

export const WeeklyGoal: React.FC = () => {
  const { selectedGoal, onChangeGoal, onPress } = useWeeklyGoal();

  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isBold={isMatch}>
        {line}
      </OnboardingText>
    ));

  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding
        buttonText="SET GOAL"
        isButtonWithLink
        routeText="Skip for now"
        onPress={onPress}
        isButtonDisabled={!selectedGoal}>
        <OnboardingTitle>Select a weekly goal</OnboardingTitle>
        <OnboardingText>
          {getPartialBoldText(
            'A minimum of 120 minutes per week spent in natural environments is correlated with [better health & wellbeing.]',
          )}
        </OnboardingText>

        <Styled.CheckboxGroup>
          <WeeklyGoalCheckboxGroup variants={weeklyGoalVariants} gap={14} onChange={onChangeGoal} />
        </Styled.CheckboxGroup>
      </LayoutOnboarding>
    </Layout>
  );
};
