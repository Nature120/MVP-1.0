import Purchases from 'react-native-purchases';
import auth from '@react-native-firebase/auth';

import { useAppDispatch } from '@services/hooks/redux';
import { signOut } from '@services/store/auth/auth.actions';

export const useSignOut = () => {
  const dispatch = useAppDispatch();

  const onSignOut = async () => {
    try {
      await auth().signOut();
      await Purchases.logOut();
      dispatch(signOut(null));
    } catch (error) {
      console.log('error', error);
    }
  };

  return { onSignOut };
};
