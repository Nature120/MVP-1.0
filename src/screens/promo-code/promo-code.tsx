import React from 'react';

import { BackButton } from '@components/molecules/back-button';
import { LayoutWithForm } from '@components/organisms/layout-with-form/layout-with-form';
import { PromoCode } from '@components/organisms/promo-code/promo-code';

import { IMAGES } from '@constants/images';

import { PromoCodeScreenStyled as Styled } from './promo-code.styles';

export const PromoCodeScreen = () => {
  return (
    <LayoutWithForm cssPropContainer={Styled.Container}>
      <Styled.Wrapper>
        <BackButton width={32} height={32} />
        <Styled.LogoIcon source={IMAGES.logo} />
        <PromoCode />
      </Styled.Wrapper>
    </LayoutWithForm>
  );
};
