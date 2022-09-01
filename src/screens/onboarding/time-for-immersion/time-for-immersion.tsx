import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';
import { TextCheckbox } from '@components/text-checkbox';
import { ITextCheckBox } from '@components/text-checkbox/text-checkbox.typings';
import { TextCheckboxGroup } from '@components/text-checkbox-group';
import { TimePicker } from '@components/time-picker';
import { TPeriod } from '@components/time-picker/time-picker.typings';

import { getMinMaxDate } from '@services/helpers/utils';

import { timeForImmersionVariants } from '../onboarding.constants';

import { StyledTimeForImmersion as Styled } from './time-for-immersion.styles';

import { OnboardingTitle } from '@theme/components';

export const TimeForImmersion: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [selectedCheckbox, setSelectedCheckbox] = useState<ITextCheckBox>();

  const [notificationTime, setNotificationTime] = useState<Date>();

  useEffect(() => {
    if (selectedPeriod) {
      const { minimumDate } = getMinMaxDate(selectedPeriod as TPeriod);
      setNotificationTime(minimumDate);
    }
  }, [selectedPeriod]);

  const onPress = () => {
    const checkboxText = selectedPeriod.replace(/_/g, ' ').toUpperCase();
    const checkboxInfo = timeForImmersionVariants.find(variant => variant.text === checkboxText);
    setSelectedCheckbox(checkboxInfo);

    if (selectedCheckbox?.text) {
      //get notifications permission
    }
  };

  const onChangeTime = (newTime: string) => {
    setSelectedPeriod(newTime);
  };

  return (
    <Layout ellipseColor="green" isWithGradient>
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
