import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import { ERROR_CODES } from '@constants/error-codes';

import { IError } from '@typings/common';
import { IERROR_CODES } from '@typings/error-codes-typings';

type TPropOnSubmit = {
  password: string;
};

export const useStateDeleteConfirmForm = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = ({ password }: TPropOnSubmit): void => {
    const isEmpty = password === '';

    if (isEmpty) {
      return;
    }

    // handleSignIn({ email, password });
    reAuthCredentials(password);
  };

  const reAuthCredentials = async (password: string) => {
    try {
      const user: any = auth().currentUser;
      const credentials = auth.EmailAuthProvider.credential(user?.email, password);
      await user.reauthenticateWithCredential(credentials);
    } catch (error) {
      const err = error as IError;
      handleError(err.code as keyof IERROR_CODES);
    }
    // credentials = firebase.auth.EmailAuthProvider.credential(user?.email, 'yourpassword');
  };

  const handleError = (code: string) => {
    setErrorMessage(ERROR_CODES[code as keyof IERROR_CODES]);
  };

  const changeVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const resetError = (): void => {
    setErrorMessage(null);
  };
  return { handleError, changeVisiblePassword, resetError, onSubmit, errorMessage, passwordVisible };
};
