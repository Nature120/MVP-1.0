import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import { databaseRef } from '../api.service';
import { TDispatch } from '../store';

import { compareArrays } from '../helpers/array.utils';
import { extractTimeForImmersion, setNotificationConfigs } from './notifications.utils';
import { updateUser } from '@services/api.service';
import { setNotificationsList } from '@services/store/app';

export const notificationsRef = databaseRef('Other text').doc('Notifications');

export const notificationsAPI = {
  applyNotifications: (date: Date, notifications: string[]) => {
    PushNotification.cancelAllLocalNotifications();
    const configs = setNotificationConfigs(date, notifications);
    configs.forEach(config => PushNotification.localNotificationSchedule(config));
  },

  requestPermissionsIOS: async () => {
    await PushNotificationIOS.requestPermissions({
      alert: true,
      badge: true,
      sound: true,
      lockScreen: true,
    });
  },

  getAll: async () => {
    const notifications = await notificationsRef.get();
    const notificationsData = notifications.data();
    if (!notificationsData) {
      return [];
    }
    return notificationsData.data as string[];
  },

  syncNotifications: async function (
    uid: string,
    notificationsList: string[],
    timeForImmersion: Date,
    dispatch: TDispatch,
    isWithoutCheck?: boolean,
  ) {
    const allNotifications = await this.getAll();
    const isWithoutChanges = isWithoutCheck ? false : compareArrays(allNotifications, notificationsList);
    if (isWithoutChanges) {
      return;
    }

    const reminderNormalizedDate = extractTimeForImmersion(timeForImmersion);

    const [reminderHours, reminderMinutes] = [reminderNormalizedDate.getHours(), reminderNormalizedDate.getMinutes()];

    const newStartReminderDate = new Date(new Date().setHours(reminderHours, reminderMinutes, 0, 0));

    await updateUser(uid, { timeForImmersion: newStartReminderDate }, dispatch);
    dispatch(setNotificationsList(allNotifications));
    this.applyNotifications(newStartReminderDate, allNotifications);
  },
};
