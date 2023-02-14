import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { appReducer } from './app';
import authReducer from './auth/auth.reducer';
import timerReducer from './timer/timer.reducer';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  blacklist: ['user', 'isAuthenticated'],
};

const timerPersistConfig = {
  key: 'timer',
  storage: AsyncStorage,
};

const combinedReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  app: appReducer,
  timer: persistReducer(timerPersistConfig, timerReducer),
});

const reducer = (state: any, action: any) => {
  return combinedReducer(state, action);
};

const persistedReducer = persistReducer(config, reducer);

export const store = configureStore({
  reducer: persistedReducer, //{ auth: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export default { store, persistor };
