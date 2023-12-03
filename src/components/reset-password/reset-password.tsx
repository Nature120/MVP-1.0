import React, { useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Button } from '@components/atoms/button';
import { Input } from '../../components/atoms/input/input';
import { BackButton } from '../molecules/back-button';
import { LayoutWithForm } from '../organisms/layout-with-form/layout-with-form';

import { ResetPasswordStyled as Styled } from './reset-password.styles';

export const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password Reset Email Sent', 'Please check your email to reset your password.');
      setEmail('');
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      Alert.alert('Error', error.message);
    }
  };

  return (
    <LayoutWithForm cssPropContainer={Styled.Container}>
      <SafeAreaView>
        <Styled.BackButtonWrapper>
          <BackButton width={32} height={32} color={'darkBlue'} />
        </Styled.BackButtonWrapper>
        <Styled.Wrapper>
          <View>
            <Styled.Title>Forgot your password?</Styled.Title>
            <Input
              handleChange={setEmail}
              value={email}
              cssInput={Styled.PromoInput}
              placeHolder={'Type your email here'}
            />
            <Button
              isDisabled={!email.length}
              styles={Styled.ButtonCss}
              buttonText={'Send recover email'}
              onPress={handleResetPassword}
            />
          </View>
        </Styled.Wrapper>
      </SafeAreaView>
    </LayoutWithForm>
  );
};
