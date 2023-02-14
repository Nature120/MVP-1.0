import React from 'react';
import { AppRegistry } from 'react-native';
import { Main } from './src/screens/_main';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { name as appName } from './app.json';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { CONFIG } from '@constants/config';
import TrackPlayer from 'react-native-track-player';

import messaging from '@react-native-firebase/messaging';
import { PlaybackService } from '@services/player/playback-service';

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

// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => PlaybackService);

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore
    return null;
  }

  return <Main />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
