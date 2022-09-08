import { AppRegistry } from 'react-native';
import { Main } from './src/screens/_main';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
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

GoogleSignin.configure({
  webClientId: '460645181759-50pp1sgcrplpr72hu2arfig25t9mjrp3.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => Main);
