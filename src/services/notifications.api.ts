import { databaseRef } from './api.service';

export const notificationsRef = databaseRef('Other text').doc('Notifications');

export const notificationsAPI = {
  getAll: async () => {
    const notifications = await notificationsRef.get();
    const notificationsData = notifications.data();
    if (!notificationsData) {
      return [];
    }
    return notificationsData.data as string[];
  },
};
