import { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { ERROR_CODES } from '@constants/error-codes';

import { IHandleSignIn, IValue } from './sign-in-form.typings';
import { IERROR_CODES } from '@typings/error-codes-typings';

export const useSignInState = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = (values: IValue): void => {
    const { email, password } = values;
    const isEmpty = email === '' || password === '';

    if (isEmpty) {
      return;
    }

    handleSignIn({ email, password });
  };

  const handleSignIn = async ({ email, password }: IHandleSignIn) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        handleError(error.code);
      });
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

  return { passwordVisible, onSubmit, resetError, changeVisiblePassword, errorMessage };
};
