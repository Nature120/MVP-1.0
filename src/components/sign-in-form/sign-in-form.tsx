import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { Input } from '@components/input/input';

import { SIGN_IN_VALIDATION_SCHEMA } from './sign-in-form.constants';
import { REACT_NATIVE_PAPER_INPUT_THEME } from '@constants/styles';

import { IHandleSignIn, IValue } from './sign-in-form.typings';
import { IResetForm } from '@typings/formik-typings';

import { SignInFormStyles as Styled } from './sign-in-form.styles';

import { COLOR } from '@theme/colors';

export const SignInForm = () => {
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
        handleError(error);
      });
  };

  const handleError = (error: any) => {
    if (error.code === 'auth/email-already-in-use') {
      return setErrorMessage('That email address is already in use!');
    } else if (error.code === 'auth/invalid-email') {
      return setErrorMessage('That email address is invalid!');
    } else if (error.code === 'auth/wrong-password') {
      return setErrorMessage('Wrong password');
    } else if (error.code === 'auth/user-not-found') {
      return setErrorMessage('User not found');
    } else if (error.code === 'auth/too-many-requests') {
      return setErrorMessage('To many requests from this device');
    } else {
      setErrorMessage(error.message);
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

  const resetError = (): void => {
    setErrorMessage(null);
  };
  return (
    <>
      <Formik
        validationSchema={SIGN_IN_VALIDATION_SCHEMA}
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}>
        {({ handleChange, handleBlur, values, errors, handleSubmit }) => {
          return (
            <>
              <Styled.InputWrapper>
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
              <Button buttonText="Sign In" buttonColor="blue" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </>
  );
};
