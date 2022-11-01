import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

import { getUser } from '@services/api.service';
import { isAuthenticated, loading, signIn } from '@services/store/auth/auth.actions';
import { getAuthentication, getFirstLaunch } from '@services/store/auth/auth.selectors';

import { TFirebaseUser } from '@typings/common';

export const useNavigationSate = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(getAuthentication);
  const isFirstLaunch = useSelector(getFirstLaunch);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      return onAuthStateChanged(user);
    });
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = async (user: TFirebaseUser) => {
    if (user === null) {
      dispatch(isAuthenticated(false));
      if (isInitializing) {
        setIsInitializing(false);
      }
      return;
    }

    dispatch(loading(true));
    setTimeout(() => {
      saveUser(user);
    }, 1000);
  };

  const saveUser = async (currentUser: TFirebaseUser) => {
    if (currentUser === null) {
      return;
    }
    const { uid } = currentUser;
    const userCredentials = await getUser(uid);
    const data = { ...userCredentials, uid };

    if (isInitializing) {
      setTimeout(() => {
        setIsInitializing(false);
      }, 200);
    }

    dispatch(signIn(data));
    dispatch(loading(false));
  };

  return { isFirstLaunch, isAuth, isInitializing };
};
