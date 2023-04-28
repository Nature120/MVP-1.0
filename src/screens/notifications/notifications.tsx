import React from 'react';
import { Text } from 'react-native';

import { Icon } from '@components/atoms/icon';
import { OnboardingTitle } from '@components/atoms/onboarding-title';
import { ButtonOnboarding } from '@components/molecules/button-onboarding';
import { Layout } from '@components/molecules/layout';
import { TextCheckbox } from '@components/molecules/text-checkbox';
import { TextCheckboxGroup } from '@components/molecules/text-checkbox-group';
import { TimePicker } from '@components/organisms/time-picker';
import { TPeriod } from '@components/organisms/time-picker/time-picker.typings';

import { useReminder } from '@services/hooks/reminder';

import { timeForImmersionVariants } from '@screens/onboarding/onboarding.constants';

import { StyledNotifications as Styled } from './notifications.styles';

export const Notifications: React.FC = () => {
  const {
    selectedCheckbox,
    onPress,
    selectedPeriod,
    timeForImmersion,
    setTimeForImmersion,
    onChangeTime,
    onPressGoBack,
  } = useReminder({ isOnboarding: false });

  return (
    <Layout>
      <Styled.BtnWrapper onPress={onPressGoBack}>
        <Icon type={'arrowLeft'} width={32} height={32} colorIcon={'cloudyGreen'} />
      </Styled.BtnWrapper>
      <OnboardingTitle allowFontScaling={false}>When is a good time for your daily nature immersion?</OnboardingTitle>

      <Styled.ContentWrapper>
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
      </Styled.ContentWrapper>

      <ButtonOnboarding onPress={onPress} buttonText="set reminder" isDisabled={!selectedPeriod} />
    </Layout>
  );
};
