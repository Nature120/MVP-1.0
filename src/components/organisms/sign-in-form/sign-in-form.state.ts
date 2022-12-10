import { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { useErrorHandler } from '@services/hooks/errorHandler';

import { IHandleSignIn, IValue } from './sign-in-form.typings';

export const useSignInState = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const { handleError, resetError, errorMessage } = useErrorHandler();

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

  const changeVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return { passwordVisible, onSubmit, resetError, changeVisiblePassword, errorMessage };
};
