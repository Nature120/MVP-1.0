import { useState } from 'react';
import { FormikValues } from 'formik';

interface IParams {
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onPressSocialBtn: () => Promise<void>;
}

export const useStateDeleteConfirmForm = ({ setPassword, onPressSocialBtn }: IParams) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(true);

  const onSubmit = async ({ password }: FormikValues) => {
    const isEmpty = password === '';

    if (isEmpty) {
      return;
    }
    setPassword(password);
    onPressSocialBtn();
  };

  const changeVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return { changeVisiblePassword, onSubmit, passwordVisible };
};
