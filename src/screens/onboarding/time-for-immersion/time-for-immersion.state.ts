import { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { ITextCheckBox } from '@components/text-checkbox/text-checkbox.typings';
import { TPeriod } from '@components/time-picker/time-picker.typings';

import { updateUser } from '@services/api.service';
import { getMinMaxDate } from '@services/helpers/utils';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

import { timeForImmersionVariants } from '../onboarding.constants';
import { setNotificationConfig } from './time-for-immersion.constants';
import { CHANNEL_CONFIG } from '@constants/notifications';
import { APP_ROUTES } from '@constants/routes';

export const useTimeForImmersion = () => {
  const { navigate } = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [selectedCheckbox, setSelectedCheckbox] = useState<ITextCheckBox>();
  const [isChannelCreated, setIsChannelCreated] = useState(false);
  const [timeForImmersion, setTimeForImmersion] = useState<Date>();
  const uid = useSelector(getUid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (selectedPeriod) {
      const { minimumDate } = getMinMaxDate(selectedPeriod as TPeriod);
      setTimeForImmersion(minimumDate);
    }
  }, [selectedPeriod]);

  const createNotificationsChannel = () =>
    PushNotification.createChannel(CHANNEL_CONFIG, isCreated => setIsChannelCreated(isCreated));

  const onPress = async () => {
    const checkboxText = selectedPeriod.replace(/_/g, ' ').toUpperCase();
    const checkboxInfo = timeForImmersionVariants.find(variant => variant.text === checkboxText);
    setSelectedCheckbox(checkboxInfo);

    if (selectedCheckbox?.text) {
      await updateUser(uid, { timeForImmersion }, dispatch);

      !isChannelCreated && createNotificationsChannel();
      PushNotification.cancelAllLocalNotifications();
      const config = setNotificationConfig(timeForImmersion!);
      PushNotification.localNotificationSchedule(config);

      navigate(APP_ROUTES.dashboard as never);
    }
  };

  const onChangeTime = (newTime: string) => {
    setSelectedPeriod(newTime);
  };

  return {
    selectedCheckbox,
    onPress,
    selectedPeriod,
    timeForImmersion,
    setTimeForImmersion,
    onChangeTime,
  };
};
