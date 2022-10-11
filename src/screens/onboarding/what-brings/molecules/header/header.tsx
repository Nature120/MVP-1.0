import React from 'react';

import { OnboardingText } from '@components/atoms/onboarding-text';
import { OnboardingTitle } from '@components/atoms/onboarding-title';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { TEXT } from './header.constants';

export const Header: React.FC = () => {
  const getPartialUnderlinedText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isUnderlined={isMatch}>
        {line}
      </OnboardingText>
    ));

  return (
    <>
      <OnboardingTitle>{TEXT.title}</OnboardingTitle>
      <OnboardingText>{getPartialUnderlinedText(TEXT.description)}</OnboardingText>
    </>
  );
};
