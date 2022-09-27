import React from 'react';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { Input } from '@components/atoms/input/input';
import { useSignInState } from './sign-in-form.state';

import { SIGN_IN_VALIDATION_SCHEMA } from './sign-in-form.constants';

import { SignInFormStyles as Styled } from './sign-in-form.styles';
import { REACT_NATIVE_PAPER_INPUT_THEME } from '@theme/styles';

import { COLOR } from '@theme/colors';

export const SignInForm = () => {
  const { passwordVisible, onSubmit, resetError, changeVisiblePassword, errorMessage } = useSignInState();

  const handleChangeIcon = (): JSX.Element => {
    return passwordVisible ? (
      <Icon type="eye" width={32} height={32} />
    ) : (
      <Icon type="openEye" width={32} height={32} colorIcon="grey" />
    );
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
