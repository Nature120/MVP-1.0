import { useEffect, useState } from 'react';
import PushNotification from 'react-native-push-notification';
import { useSelector } from 'react-redux';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useNavigation } from '@react-navigation/native';

import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';
import { TPeriod } from '@components/organisms/time-picker/time-picker.typings';

import { setNotificationAndroidConfig, setNotificationIOSConfig } from './time-for-immersion.utils';
import { updateUser } from '@services/api.service';
import { isIOS } from '@services/helpers/device-utils';
import { getMinMaxDate } from '@services/helpers/utils';
import { useAppDispatch } from '@services/hooks/redux';
import { getUid } from '@services/store/auth/auth.selectors';

import { timeForImmersionVariants } from '../onboarding.constants';
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

    navigate(APP_ROUTES.dashboard as never);
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
