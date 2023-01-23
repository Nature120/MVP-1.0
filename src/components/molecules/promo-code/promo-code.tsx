import React, { useState } from 'react';
import { Linking } from 'react-native';

import { Button } from '@components/atoms/button';
import { Input } from '@components/atoms/input/input';

import { isIOS } from '@services/helpers/device-utils';

import { APPLE_PROMO_CODE_URL, GOOGLE_PLAY_PROMO_CODE_URL } from '@constants/appliction-url';

import { PromoCodeStyled as Styled } from './promo-code.styles';

export const PromoCode = () => {
  const [value, setValue] = useState('');

  const onChangeText = (text: string) => {
    setValue(text);
  };

  const onPressRedeem = () => {
    if (value === '') {
      return;
    }

    isIOS
      ? Linking.openURL(`${APPLE_PROMO_CODE_URL}${value}`)
      : Linking.openURL(`${GOOGLE_PLAY_PROMO_CODE_URL}${value}`);
    setValue('');
  };

  return (
    <Styled.Container>
      <Styled.Title>Promo code</Styled.Title>
      <Input handleChange={onChangeText} value={value} cssInput={Styled.PromoInput} placeHolder={'Type code here'} />
      <Button styles={Styled.ButtonCss} buttonText={'Redeem'} onPress={onPressRedeem} />
    </Styled.Container>
  );
};
