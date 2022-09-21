import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { Input } from '@components/input/input';

import LoginFunctions from '@services/helpers/auth-social';
import { saveInDB } from '@services/helpers/firebase-store';

import { REGISTER_VALIDATION_SCHEMA } from './sign-up-form.constants';
import { REACT_NATIVE_PAPER_INPUT_THEME } from '@constants/styles';

import { IRegister, IValue } from './sign-up-form.typings';
import { IResetForm } from '@typings/formik-typings';

import { SignUpFormStyles as Styled } from './sign-up-form.styles';

import { COLOR } from '@theme/colors';

export const SignUpForm = () => {
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

      const data = { email, first_name };
      // dispatch
      saveInDB({ data, uid });
    } catch (error) {
      handleError(error);
    }
  };

  const handleChangeIcon = (): JSX.Element => {
    return passwordVisible ? (
      <Icon type="eye" width={32} height={32} />
    ) : (
      <Icon type="openEye" width={32} height={32} colorIcon="grey" />
    );
  };

  const changeVisiblePassword = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  ////Errors
  const handleError = (error: any) => {
    if (error.code === 'auth/email-already-in-use') {
      return setErrorMessage('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      return setErrorMessage('That email address is invalid!');
    }
  };

  const resetError = (): void => {
    setErrorMessage(null);
  };

  return (
    <>
      <Formik
        validationSchema={REGISTER_VALIDATION_SCHEMA}
        initialValues={{ email: '', password: '', first_name: '' }}
        onSubmit={onSubmit}>
        {({ handleChange, handleBlur, values, errors, handleSubmit }) => {
          return (
            <>
              <Styled.InputWrapper>
                <Input
                  placeHolder="First name"
                  value={values.first_name}
                  handleChange={handleChange('first_name')}
                  handleBlur={handleBlur('first_name')}
                  placeHolderTextColor={'lightGrey'}
                  onFocus={resetError}
                />
                <Styled.ErrorText>{errors.first_name ? errors.first_name : ''}</Styled.ErrorText>
                <Input
                  placeHolder="Email Address"
                  value={values.email}
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  keyboardType="email-address"
                  placeHolderTextColor={'lightGrey'}
                  onFocus={resetError}
                />
                <Styled.ErrorText>{errors.email ? errors.email : ''}</Styled.ErrorText>
                <Styled.InputPassword
                  placeholderTextColor={COLOR.font.lightGrey}
                  theme={REACT_NATIVE_PAPER_INPUT_THEME}
                  underlineColor="transparent"
                  selectionColor={COLOR.font.lightGrey}
                  activeUnderlineColor="transparent"
                  placeholder="Password"
                  value={values.password}
                  onFocus={resetError}
                  caretHidden={false}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={passwordVisible}
                  right={<TextInput.Icon onPress={changeVisiblePassword} name={handleChangeIcon} />}
                />
                <Styled.ErrorText>{errors.password ? errors.password : '' || errorMessage}</Styled.ErrorText>
              </Styled.InputWrapper>
              <Button buttonText="CREATE ACCOUNT" buttonColor="blue" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </>
  );
};
