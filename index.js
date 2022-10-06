import { AppRegistry } from 'react-native';
import { Main } from './src/screens/_main';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { name as appName } from './app.json';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { CONFIG } from '@constants/config';

import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

PushNotification.configure({
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  requestPermissions: false,
});

GoogleSignin.configure({
  webClientId: CONFIG.webClientId,
});

AppRegistry.registerComponent(appName, () => Main);
