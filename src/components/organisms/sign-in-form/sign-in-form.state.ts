import { useState } from 'react';
import auth from '@react-native-firebase/auth';

import { ERROR_CODES } from './sign-in-form.constants';

import { IERROR_CODES, IHandleSignIn, IValue } from './sign-in-form.typings';
import { IResetForm } from '@typings/formik-typings';

export const useSignInState = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = (values: IValue, { resetForm }: IResetForm): void => {
    const { email, password } = values;
    const isEmpty = email === '' || password === '';

    if (isEmpty) {
      return;
    }

    handleSignIn({ email, password });

    resetForm();
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
