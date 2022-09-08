import { AppRegistry } from 'react-native';
import { Main } from './src/screens/_main';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { name as appName } from './app.json';

GoogleSignin.configure({
  webClientId: '460645181759-50pp1sgcrplpr72hu2arfig25t9mjrp3.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => Main);
