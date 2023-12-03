import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import auth from '@react-native-firebase/auth';

import { DeleteAccount } from '@screens/settings/delete-account/delete-account';
import { Button } from '@components/atoms/button';
import { BackButton } from '@components/molecules/back-button';
import { LayoutWithForm } from '@components/organisms/layout-with-form/layout-with-form';
import { Input } from '../../components/atoms/input/input';
import { PromoCode } from '../../components/molecules/promo-code/promo-code';

import { isIOS } from '@services/helpers/device-utils';

import { SettingsStyled as Styled } from './settings.styles';

const ResetPasswordScreen = () => {
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
    <View>
      <Styled.Title>Forgot your password?</Styled.Title>
      <Input handleChange={setEmail} value={email} cssInput={Styled.PromoInput} placeHolder={'Type your email here'} />
      <Button
        isDisabled={!email.length}
        styles={Styled.ButtonCss}
        buttonText={'Send recover email'}
        onPress={handleResetPassword}
      />
    </View>
  );
};
export const Settings = () => {
  return (
    <LayoutWithForm cssPropContainer={Styled.Container}>
      <Styled.Wrapper>
        <Styled.Header>
          <BackButton width={32} height={32} />
        </Styled.Header>
        <DeleteAccount />
        {isIOS && <PromoCode />}
        <ResetPasswordScreen />
      </Styled.Wrapper>
    </LayoutWithForm>
  );
};
