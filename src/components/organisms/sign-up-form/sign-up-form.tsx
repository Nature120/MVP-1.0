import React from 'react';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { Input } from '@components/atoms/input/input';
import { useSignUpState } from './sign-up-form.state';

import { REGISTER_VALIDATION_SCHEMA } from './sign-up-form.constants';
import { IMAGES } from '@constants/images';

import { SignUpFormStyles as Styled } from './sign-up-form.styles';
import { REACT_NATIVE_PAPER_INPUT_THEME } from '@theme/styles';

import { COLOR } from '@theme/colors';

export const SignUpForm = () => {
  const { passwordVisible, onSubmit, resetError, changeVisiblePassword, errorMessage } = useSignUpState();

  const handleChangeIcon = (): JSX.Element => {
    return passwordVisible ? (
      <Styled.ClosedEye source={IMAGES.closedEye} />
    ) : (
      <Icon type="openEye" width={24} height={24} colorIcon="grey" />
    );
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
              <Button buttonText="CREATE ACCOUNT" buttonColor="blue" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </>
  );
};
