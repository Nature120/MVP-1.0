import { useState } from 'react';
import auth from '@react-native-firebase/auth';

import LoginFunctions from '@services/helpers/auth-social';
import { saveInDB } from '@services/helpers/firebase-store';

import { IRegister, IValue } from './sign-up-form.typings';
import { IResetForm } from '@typings/formik-typings';

export const useSignUpState = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<null | string>(null);

  const onSubmit = (values: IValue, { resetForm }: IResetForm): void => {
    const { email, password, first_name } = values;
    const isEmpty = email === '' || password === '' || first_name === '';

    if (isEmpty) {
      return;
    }
    handleRegister({ email, password, first_name });
    resetForm();
  };

  const handleRegister = async ({ email, password, first_name }: IRegister): Promise<void> => {
    try {
      const credential = auth.EmailAuthProvider.credential(email, password);
      const provider = auth.EmailAuthProvider.PROVIDER_ID;

      const response = await auth().createUserWithEmailAndPassword(email, password);

      LoginFunctions.saveCredential({ provider, credential });

      ////Store in DB////
      const uid = response.user.uid;

      const data = { email, first_name, finishedPractices: [], recentPractices: [] };
      // dispatch
      saveInDB({ data, uid });
    } catch (error: any) {
      handleError(error.code);
    }
  };

  const changeVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
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
