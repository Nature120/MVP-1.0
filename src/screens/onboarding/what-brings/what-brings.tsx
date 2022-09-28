import React from 'react';

import { OnboardingText } from '@components/atoms/onboarding-text';
import { OnboardingTitle } from '@components/atoms/onboarding-title';
import { Layout } from '@components/molecules/layout';
import { TextCheckboxGroup } from '@components/molecules/text-checkbox-group';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { useWhatBrings } from './what-brings.state';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { StyledWhatBrings as Styled } from './what-brings.styles';

export const WhatBrings: React.FC = () => {
  const { whatBrings, whatBringsVariants, onPress, onChangeVariants } = useWhatBrings();

  const getPartialUnderlinedText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isUnderlined={isMatch}>
        {line}
      </OnboardingText>
    ));

  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding
        buttonText="continue"
        isButtonWithLink
        routeText="Skip for now"
        onPress={onPress}
        isButtonDisabled={!whatBrings.length}>
        <OnboardingTitle>What brings you to Nature OneTwenty?</OnboardingTitle>
        <OnboardingText>
          {getPartialUnderlinedText('We’ll personalize recommendations based on your goals. [Select all that apply.]')}
        </OnboardingText>

        <Styled.CheckboxGroup>
          <TextCheckboxGroup isMulti gap={14} onChange={onChangeVariants} variants={whatBringsVariants} />
        </Styled.CheckboxGroup>
      </LayoutOnboarding>
    </Layout>
  );
};
