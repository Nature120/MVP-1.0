import React from 'react';
import { Text } from 'react-native';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { TextCheckbox } from '@components/text-checkbox';
import { TextCheckboxGroup } from '@components/text-checkbox-group';
import { TimePicker } from '@components/time-picker';
import { TPeriod } from '@components/time-picker/time-picker.typings';
import { useTimeForImmersion } from './time-for-immersion.state';

import { timeForImmersionVariants } from '../onboarding.constants';

import { StyledTimeForImmersion as Styled } from './time-for-immersion.styles';

import { OnboardingTitle } from '@theme/components';

export const TimeForImmersion: React.FC = () => {
  const { selectedCheckbox, onPress, selectedPeriod, notificationTime, setNotificationTime, onChangeTime } =
    useTimeForImmersion();

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

        {selectedCheckbox?.text && notificationTime ? (
          <Styled.ReminderContainer>
            <Styled.SingleCheckBoxWrapper>
              <TextCheckbox {...selectedCheckbox} isChecked activeOpacity={1} />
            </Styled.SingleCheckBoxWrapper>
            <Text>
              <Styled.Text>Great! We can remind you to spend some time in nature at:</Styled.Text>
              <Styled.TimePickerContainer>
                <TimePicker period={selectedPeriod as TPeriod} time={notificationTime} setTime={setNotificationTime} />
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
