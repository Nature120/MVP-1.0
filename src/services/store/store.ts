import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import authReducer from './auth/auth.reducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  // blacklist: ["error"],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: { auth: persistedReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export type TStore = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;
export default { store, persistor };
