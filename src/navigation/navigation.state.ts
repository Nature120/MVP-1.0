import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';

import { getUser } from '@services/api.service';
import { isAuthenticated, signIn } from '@services/store/auth/auth.actions';
import { getAuthentication, getFirstLaunch } from '@services/store/auth/auth.selectors';

import { TFirebaseUser } from '@typings/common';

export const useNavigationSate = () => {
  const dispatch = useDispatch();
  const isAuthenitcated = useSelector(getAuthentication);
  const isFirstLaunch = useSelector(getFirstLaunch);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = async (user: TFirebaseUser) => {
    if (user === null) {
      dispatch(isAuthenticated(false));
      return;
    }
    saveUser(user);
  };

  const saveUser = async (currentUser: TFirebaseUser) => {
    if (currentUser === null) {
      return;
    }
    const { uid } = currentUser;

    const userCredentials = await getUser(uid);
    const data = { ...userCredentials, uid };

    dispatch(signIn(data));
  };
  return { isFirstLaunch, isAuthenitcated };
};