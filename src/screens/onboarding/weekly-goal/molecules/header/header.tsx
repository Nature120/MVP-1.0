import React from 'react';

import { OnboardingText } from '@components/atoms/onboarding-text';
import { OnboardingTitle } from '@components/atoms/onboarding-title';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { TEXT } from './header.constants';

export const Header: React.FC = () => {
  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isBold={isMatch}>
        {line}
      </OnboardingText>
    ));

  return (
    <>
      <OnboardingTitle allowFontScaling={false}>{TEXT.title}</OnboardingTitle>
      <OnboardingText allowFontScaling={false}>{getPartialBoldText(TEXT.description)}</OnboardingText>
    </>
  );
};
