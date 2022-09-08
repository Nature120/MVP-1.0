import { PushNotificationScheduleObject } from 'react-native-push-notification';

import { NOTIFICATION_CHANNEL_ID } from '@constants/notifications';

export const setNotificationConfig = (date: Date): PushNotificationScheduleObject => ({
  channelId: NOTIFICATION_CHANNEL_ID,
  repeatType: 'day',
  title: 'title!!',
  message: 'scheduled notification',
  date,
});
