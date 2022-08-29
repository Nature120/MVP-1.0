import React, { useState } from 'react';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { TextCheckboxGroup } from '@components/text-checkbox-group';
import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';
import { OnboardingText, OnboardingTitle } from '@theme/components';
import { whatBringsVariants } from '../onboarding.constants';
import { StyledWhatBrings as Styled } from './what-brings.styles';

export const WhatBrings: React.FC = () => {
  const [selectedVariants, setSelectedVariants] = useState<string[]>([]);

  const getPartialUnderlinedText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isUnderlined={isMatch}>
        {line}
      </OnboardingText>
    ));

  const onPress = () => {
    console.log('🛑 ~ selectedVariants', selectedVariants);
  };

  const onChangeVariants = (newVariants: string[]) => {
    setSelectedVariants(newVariants);
  };

  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding
        buttonText="continue"
        isButtonWithLink
        routeText="Skip for now"
        onPress={onPress}
        isButtonDisabled={!selectedVariants.length}>
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
