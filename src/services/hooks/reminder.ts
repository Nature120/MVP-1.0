import { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';
import { useSelector } from 'react-redux';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useNavigation } from '@react-navigation/native';

import {
  setNotificationAndroidConfig,
  setNotificationIOSConfig,
} from '@screens/onboarding/time-for-immersion/time-for-immersion.utils';
import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';
import { TPeriod } from '@components/organisms/time-picker/time-picker.typings';
import { useAppDispatch } from './redux';

import { updateUser } from '@services/api.service';
import { isIOS } from '@services/helpers/device-utils';
import { getMinMaxDate } from '@services/helpers/utils';
import { getUid } from '@services/store/auth/auth.selectors';

import { CHANNEL_CONFIG } from '@constants/notifications';
import { APP_ROUTES } from '@constants/routes';
import { timeForImmersionVariants } from '@screens/onboarding/onboarding.constants';

export const useReminder = () => {
  const { navigate } = useNavigation();
  const [selectedPeriod, setSelectedPeriod] = useState<string>('');
  const [selectedCheckbox, setSelectedCheckbox] = useState<ITextCheckBox>();
  const [isChannelCreated, setIsChannelCreated] = useState(false);
  const [timeForImmersion, setTimeForImmersion] = useState<Date>();
  const uid = useSelector(getUid);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!selectedPeriod) {
      return;
    }
    const { minimumDate } = getMinMaxDate(selectedPeriod as TPeriod);
    setTimeForImmersion(minimumDate);
  }, [selectedPeriod]);

  const createNotificationsChannel = () =>
    PushNotification.createChannel(CHANNEL_CONFIG, isCreated => setIsChannelCreated(isCreated));

  const onPress = async () => {
    const checkboxText = selectedPeriod.replace(/_/g, ' ').toUpperCase();
    const checkboxInfo = timeForImmersionVariants.find(variant => variant.text === checkboxText);
    setSelectedCheckbox(checkboxInfo);

    if (!selectedCheckbox?.text) {
      return;
    }

    await updateUser(uid, { timeForImmersion }, dispatch);

    if (isIOS) {
      await PushNotificationIOS.requestPermissions({
        alert: true,
        badge: true,
        sound: true,
        lockScreen: true,
      });

      PushNotificationIOS.removeAllPendingNotificationRequests();
      PushNotificationIOS.removeAllDeliveredNotifications();
      const config = setNotificationIOSConfig(timeForImmersion!);
      PushNotificationIOS.addNotificationRequest(config);
    } else {
      !isChannelCreated && createNotificationsChannel();
      PushNotification.cancelAllLocalNotifications();
      const config = setNotificationAndroidConfig(timeForImmersion!);
      PushNotification.localNotificationSchedule(config);
    }

    clearState();
    navigate(APP_ROUTES.dashboard as never);
  };

  const onChangeTime = (newTime: string) => {
    setSelectedPeriod(newTime);
  };

  const onPressGoBack = () => {
    if (!selectedCheckbox?.text) {
      return navigate(APP_ROUTES.dashboard as never);
    }
    clearState();
  };

  const clearState = () => {
    setSelectedCheckbox(undefined);
    setSelectedPeriod('');
  };

  return {
    selectedCheckbox,
    onPress,
    selectedPeriod,
    timeForImmersion,
    setTimeForImmersion,
    onPressGoBack,
    onChangeTime,
  };
};
