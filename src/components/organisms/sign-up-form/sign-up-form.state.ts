import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import LoginFunctions from '@services/helpers/auth-social';
import { storeInDB } from '@services/helpers/firebase-store';
import { isFirstLaunch } from '@services/store/auth/auth.actions';

import { IRegister, IValue } from './sign-up-form.typings';

export const useSignUpState = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const dispatch = useDispatch();

  const onSubmit = async (values: IValue): Promise<void> => {
    const { email, password, first_name } = values;
    const isEmpty = email === '' || password === '' || first_name === '';

    if (isEmpty) {
      return;
    }
    await handleRegister({ email, password, first_name });
    await isFirstLaunchCheck();
  };

  const handleRegister = async ({ email, password, first_name }: IRegister): Promise<void> => {
    try {
      const credential = auth.EmailAuthProvider.credential(email, password);
      const provider = auth.EmailAuthProvider.PROVIDER_ID;

      const response = await auth().createUserWithEmailAndPassword(email, password);

      LoginFunctions.saveCredential({ provider, credential });

      ////Store in DB////
      await storeInDB({ response, first_name });
    } catch (error: any) {
      handleError(error.code);
    }
  };

  const changeVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const isFirstLaunchCheck = async () => {
    const value = await AsyncStorage.getItem('isFirstLaunchNature120');
    const isFirstTime = value === 'true';
    if (isFirstTime) {
      return dispatch(isFirstLaunch(true));
    }
    dispatch(isFirstLaunch(false));
  };

  ////Errors
  const handleError = (error: string) => {
    switch (error) {
      case 'auth/email-already-in-use':
        setErrorMessage('That email address is already in use!');
        break;
      case 'auth/invalid-email':
        setErrorMessage('That email address is invalid!');
        break;

      default:
        setErrorMessage('Something goes wrong!');
        break;
    }
  };

  const resetError = (): void => {
    setErrorMessage(null);
  };

  return { passwordVisible, onSubmit, resetError, changeVisiblePassword, errorMessage };
};
