import { AppRegistry } from 'react-native';
import { Main } from './src/screens/_main';
import { name as appName } from './app.json';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  requestPermissions: false,
});

AppRegistry.registerComponent(appName, () => Main);
