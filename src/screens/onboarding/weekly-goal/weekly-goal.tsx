import React, { useState } from 'react';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { WeeklyGoalCheckboxGroup } from '@components/weekly-goal-checkbox-group';
import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';
import { OnboardingText, OnboardingTitle } from '@theme/components';
import { weeklyGoalVariants } from '../onboarding.constants';
import { StyledWeeklyGoal as Styled } from './weekly-goal.styles';

export const WeeklyGoal: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isBold={isMatch}>
        {line}
      </OnboardingText>
    ));

  const onPress = () => {
    console.log('🛑 ~ selectedGoal', selectedGoal);
  };

  const onChangeGoal = (newGoal: string) => {
    setSelectedGoal(newGoal);
  };

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
