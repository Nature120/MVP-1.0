import React from 'react';

import { Checkbox } from './checkbox/checkbox';

import { onPressLink } from '@services/helpers/utils';

import { PRIVACY, TERMS } from '@constants/social-url';

import { IPropButtonConfirm } from '../sign-up-form.typings';

import { ButtonConfirmationStyled as Styled } from './button-confirmation.styles';

export const ButtonConfirmation: React.FC<IPropButtonConfirm> = ({
  isChecked,
  setIsChecked,
  title,
  isWarningCheckBoxBorder,
}) => {
  const navigationLink = title === 'terms' ? TERMS : PRIVACY;

  const onToggle = () => {
    setIsChecked(!isChecked);
  };

  const onPressConfirmLink = async () => {
    await onPressLink(navigationLink);
  };

  return (
    <Styled.Container title={title}>
      <Styled.Btn onPress={onToggle}>
        <Styled.BtnWrapper>
          <Checkbox isChecked={isChecked} isWarningCheckBoxBorder={isWarningCheckBoxBorder} />
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
