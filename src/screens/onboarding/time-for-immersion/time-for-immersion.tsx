import React from 'react';
import { Text } from 'react-native';

import { OnboardingTitle } from '@components/atoms/onboarding-title';
import { Layout } from '@components/molecules/layout';
import { TextCheckbox } from '@components/molecules/text-checkbox';
import { TextCheckboxGroup } from '@components/molecules/text-checkbox-group';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { TimePicker } from '@components/organisms/time-picker';
import { TPeriod } from '@components/organisms/time-picker/time-picker.typings';

import { useReminder } from '@services/hooks/reminder/reminder';

import { timeForImmersionVariants } from '../onboarding.constants';

import { StyledTimeForImmersion as Styled } from './time-for-immersion.styles';

export const TimeForImmersion: React.FC = () => {
  const { selectedCheckbox, onPress, selectedPeriod, timeForImmersion, setTimeForImmersion, onChangeTime } =
    useReminder();

  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding
        buttonText={'set reminder'}
        isButtonWithLink={!!selectedCheckbox?.text || !selectedPeriod}
        routeText={'Skip for now'}
        onPress={onPress}
        isWithoutRedirect
        isButtonDisabled={!selectedPeriod}>
        <OnboardingTitle>When is a good time for your daily nature immersion?</OnboardingTitle>

        {selectedCheckbox?.text && timeForImmersion ? (
          <Styled.ReminderContainer>
            <Styled.SingleCheckBoxWrapper>
              <TextCheckbox {...selectedCheckbox} isChecked activeOpacity={1} />
            </Styled.SingleCheckBoxWrapper>
            <Text>
              <Styled.Text>Great! We can remind you to spend some time in nature at:</Styled.Text>
              <Styled.TimePickerContainer>
                <TimePicker period={selectedPeriod as TPeriod} time={timeForImmersion} setTime={setTimeForImmersion} />
              </Styled.TimePickerContainer>
            </Text>
          </Styled.ReminderContainer>
        ) : (
          <Styled.CheckboxGroup>
            <TextCheckboxGroup gap={20} onChange={onChangeTime} variants={timeForImmersionVariants} />
          </Styled.CheckboxGroup>
        )}
      </LayoutOnboarding>
    </Layout>
  );
};
