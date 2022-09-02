import { useEffect, useState } from 'react';

import { ITextCheckBox } from '@components/text-checkbox/text-checkbox.typings';
import { TPeriod } from '@components/time-picker/time-picker.typings';

import { getMinMaxDate } from '@services/helpers/utils';

import { timeForImmersionVariants } from '../onboarding.constants';

export const useTimeForImmersion = () => {
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

  return {
    selectedCheckbox,
    onPress,
    selectedPeriod,
    notificationTime,
    setNotificationTime,
    onChangeTime,
  };
};
