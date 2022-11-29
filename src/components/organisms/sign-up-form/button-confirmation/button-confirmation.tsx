import React from 'react';
import { Alert, Linking } from 'react-native';

import { Checkbox } from './checkbox/checkbox';

import { PRIVACY, TERMS } from '@constants/social-url';

import { IProp } from '../sign-up-form.typings';

import { ButtonConfirmationStyled as Styled } from './button-confirmation.styles';

export const ButtonConfirmation: React.FC<IProp> = ({ isChecked, setIsChecked, title }) => {
  const navigationLink = title === 'terms' ? TERMS : PRIVACY;

  const onToggle = () => {
    setIsChecked(!isChecked);
  };

  const onPressConfirmLink = async () => {
    const supported = await Linking.canOpenURL(navigationLink);
    if (supported) {
      await Linking.openURL(navigationLink);
    } else {
      Alert.alert(`Don't know how to open ${navigationLink}`);
    }
  };

  return (
    <Styled.Container title={title}>
      <Styled.Btn onPress={onToggle}>
        <Styled.BtnWrapper>
          <Checkbox isChecked={isChecked} />
          <Styled.TitleWrapper>
            <Styled.TitleText>I Accept </Styled.TitleText>
            <Styled.TitleBtnLink onPress={onPressConfirmLink}>
              <Styled.TitleBtnLinkText>
                {title === 'terms' ? 'Terms and Conditions' : 'Privacy Policy'}
              </Styled.TitleBtnLinkText>
            </Styled.TitleBtnLink>
          </Styled.TitleWrapper>
        </Styled.BtnWrapper>
      </Styled.Btn>
    </Styled.Container>
  );
};
