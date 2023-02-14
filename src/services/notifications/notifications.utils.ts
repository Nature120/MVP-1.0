import { PushNotificationScheduleObject } from 'react-native-push-notification';

import { NOTIFICATION_CHANNEL_ID } from '@constants/notifications';

export const NOTIFICATIONS_COUNT = 60;

export const setNotificationConfigs = (date: Date, notificationsList: string[]) => {
  const schedulingDates = [...Array(NOTIFICATIONS_COUNT)].map((_, index) => {
    if (index === 0) {
      return new Date(date.setDate(date.getDate()));
    }
    return new Date(date.setDate(date.getDate() + 1));
  });

  const configs = [...Array(NOTIFICATIONS_COUNT)].map((_, index): PushNotificationScheduleObject => {
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

export const extractTimeForImmersion = (timeForImmersion: Date) => {
  const reminderDate = timeForImmersion as unknown as { seconds: number };
  const reminderNormalizedDate = new Date(reminderDate.seconds * 1000);
  return reminderNormalizedDate;
};
