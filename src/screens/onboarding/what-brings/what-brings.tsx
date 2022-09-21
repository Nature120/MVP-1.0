import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Layout } from '@components/molecules/layout';
import { TextCheckboxGroup } from '@components/molecules/text-checkbox-group';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';

import { updateUser } from '@services/api.service';
import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

import { whatBringsVariants } from '../onboarding.constants';

import { StyledWhatBrings as Styled } from './what-brings.styles';

import { OnboardingText, OnboardingTitle } from '@theme/components';

export const WhatBrings: React.FC = () => {
  const [whatBrings, setWhatBrings] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  const uid = useSelector(getUid);

  const getPartialUnderlinedText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <OnboardingText key={line + index} isUnderlined={isMatch}>
        {line}
      </OnboardingText>
    ));

  const onPress = async () => {
    await updateUser(uid, { whatBrings }, dispatch);
  };

  const onChangeVariants = (newVariants: string[]) => {
    setWhatBrings(newVariants);
  };

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
