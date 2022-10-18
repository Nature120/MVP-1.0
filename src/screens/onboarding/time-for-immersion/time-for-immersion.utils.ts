import { PushNotificationScheduleObject } from 'react-native-push-notification';
import { NotificationRequest } from '@react-native-community/push-notification-ios';

import { NOTIFICATION_CHANNEL_ID } from '@constants/notifications';

export const setNotificationAndroidConfig = (date: Date): PushNotificationScheduleObject => ({
  channelId: NOTIFICATION_CHANNEL_ID,
  repeatType: 'day',
  title: 'title!!',
  message: 'scheduled notification',
  date,
});

export const setNotificationIOSConfig = (date: Date): NotificationRequest => ({
  id: NOTIFICATION_CHANNEL_ID,
  title: 'ios title!!',
  body: 'scheduled ios notification',
  fireDate: date,
  repeats: true,
  repeatsComponent: {
    hour: true,
    minute: true,
  },
});
