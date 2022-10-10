import React from 'react';

import { OnboardingCard } from '@components/atoms/onboarding-card';
import { OnboardingTitle } from '@components/atoms/onboarding-title';

import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';

import { TEXT } from './card.constants';

import { StyledCard as Styled } from './card.styles';

export const Card: React.FC = () => {
  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.CardText key={line + index} isBold={isMatch}>
        {line}
      </Styled.CardText>
    ));

  return (
    <Styled.Card>
      <OnboardingCard>
        <OnboardingTitle>{TEXT.title}</OnboardingTitle>
        <Styled.CardText>{getPartialBoldText(TEXT.description)}</Styled.CardText>
      </OnboardingCard>
    </Styled.Card>
  );
};
