import React, { useState } from 'react';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { TextCheckbox } from '@components/text-checkbox';
import { ITextCheckBox } from '@components/text-checkbox/text-checkbox.typings';
import { TextCheckboxGroup } from '@components/text-checkbox-group';

import { timeForImmersionVariants } from '../onboarding.constants';

import { StyledTimeForImmersion as Styled } from './time-for-immersion.styles';

import { OnboardingTitle } from '@theme/components';

export const TimeForImmersion: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedCheckbox, setSelectedCheckbox] = useState<ITextCheckBox>();

  const onPress = () => {
    const checkboxText = selectedTime.replace(/_/g, ' ').toUpperCase();
    const checkboxInfo = timeForImmersionVariants.find(variant => variant.text === checkboxText);
    setSelectedCheckbox(checkboxInfo);

    if (selectedCheckbox?.text) {
      //get notifications permission
    }
  };

  const onChangeTime = (newTime: string) => {
    setSelectedTime(newTime);
  };

  return (
    <Layout ellipseColor="green" isWithGradient>
      <LayoutOnboarding
        buttonText={!selectedTime ? 'continue' : 'set reminder'}
        isButtonWithLink={!!selectedCheckbox?.text || !selectedTime}
        routeText={'Skip for now'}
        onPress={onPress}
        isWithoutRedirect
        isButtonDisabled={!selectedTime}>
        <OnboardingTitle>When is a good time for your daily nature immersion?</OnboardingTitle>

        {!selectedCheckbox?.text ? (
          <Styled.CheckboxGroup>
            <TextCheckboxGroup gap={20} onChange={onChangeTime} variants={timeForImmersionVariants} />
          </Styled.CheckboxGroup>
        ) : (
          <Styled.ReminderContainer>
            <TextCheckbox {...selectedCheckbox} isChecked activeOpacity={1} />
            <Styled.Text>Great! We can remind you to spend some time in nature at:</Styled.Text>
          </Styled.ReminderContainer>
        )}
      </LayoutOnboarding>
    </Layout>
  );
};
