import { PushNotificationScheduleObject } from 'react-native-push-notification';

import { NOTIFICATION_CHANNEL_ID } from '@constants/notifications';

export const setNotificationConfig = (date: Date, notificationsList: string[]): PushNotificationScheduleObject => {
  const randomNotificationIndex = Math.floor(Math.random() * notificationsList.length);
  const randomNotification = notificationsList[randomNotificationIndex];

  return {
    channelId: NOTIFICATION_CHANNEL_ID,
    repeatType: 'day',
    title: 'title!',
    message: randomNotification,
    date,
  };
};
