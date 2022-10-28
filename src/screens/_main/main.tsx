import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import * as Sentry from '@sentry/react-native';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { RootNavigator } from '@navigation/root.navigator';

import { store } from '@services/store';

Sentry.init({
  dsn: 'https://f5cb3cdc8e2e47b18e73dc07521d4f51@o4504010858889216.ingest.sentry.io/4504010861051904',
  tracesSampleRate: 1.0,
});

export const Main = () => {
  const persistor = persistStore(store);

  useEffect(() => {
    LogBox.ignoreLogs(['Looks', 'Require']);
  }, []);

  const handleHideSpashScreen = () => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3500);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer onReady={handleHideSpashScreen}>
          <SafeAreaProvider>
            <RootNavigator />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.wrap(Main);
