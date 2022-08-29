import React from 'react';
import { Text } from 'react-native';
import { Formik } from 'formik';

import { Input } from '@components/input/input';

import { REGISTER_VALIDATION_SCHEMA } from './sign-up.constants';

import { IResetForm, IVelue } from './sign-up.typings';

import { FormikInputStyles as Styled } from './sign-up.styles';

export const SignUp = () => {
  const onSubmit = async (values: IVelue, { resetForm }: IResetForm) => {
    const { email, password, first_name } = values;
    // dispatch(
    //   signUp({
    //     email,
    //     password,
    //     first_name,
    //     last_name,
    //     device_token: deviceToken,
    //   }),
    // );
    resetForm();
  };

  return (
    <Styled.Container>
      <Formik
        validationSchema={REGISTER_VALIDATION_SCHEMA}
        initialValues={{ email: '', password: '', first_name: '' }}
        onSubmit={onSubmit}>
        {({ handleChange, handleBlur, values, errors, isValid, handleSubmit, handleReset }) => {
          // const onPressForgotPassword = () => {
          //   handleReset();
          //   navigate('Forgot password', {});
          // };

          // const onFocus = () => {
          //   dispatch(errorReset());
          // };
          return (
            <>
              <Input
                placeHolder="First name"
                value={values.first_name}
                handleChange={handleChange('first_name')}
                handleBlur={handleBlur('first_name')}
              />
              <Styled.ErrorText>{errors.first_name ? errors.first_name : ''}</Styled.ErrorText>
              <Input
                placeHolder="Email Address"
                value={values.email}
                handleChange={handleChange('email')}
                handleBlur={handleBlur('email')}
              />
              <Styled.ErrorText>{errors.email ? errors.email : ''}</Styled.ErrorText>
              <Input
                placeHolder="Password"
                value={values.password}
                handleChange={handleChange('password')}
                handleBlur={handleBlur('password')}
              />
              <Styled.ErrorText>{errors.password ? errors.password : ''}</Styled.ErrorText>
            </>
          );
        }}
      </Formik>
    </Styled.Container>
  );
};
