import { PushNotificationScheduleObject } from 'react-native-push-notification';

import { NOTIFICATION_CHANNEL_ID } from '@constants/notifications';

const COUNT = 60;

export const setNotificationConfigs = (date: Date, notificationsList: string[]) => {
  const schedulingDates = [...Array(COUNT)].map((_, index) => {
    if (index === 0) {
      return new Date(date.setDate(date.getDate()));
    }
    return new Date(date.setDate(date.getDate() + 1));
  });

  const configs = [...Array(COUNT)].map((_, index): PushNotificationScheduleObject => {
    const randomNotificationIndex = Math.floor(Math.random() * notificationsList.length);
    const randomNotification = notificationsList[randomNotificationIndex];

    return {
      channelId: NOTIFICATION_CHANNEL_ID,
      title: 'Nature 120',
      message: randomNotification,
      date: schedulingDates[index],
    };
  });

  return configs;
};
