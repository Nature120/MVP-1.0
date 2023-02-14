import React from 'react';

import { DeleteAccount } from '@screens/settings/delete-account/delete-account';
import { BackButton } from '@components/molecules/back-button';
import { LayoutWithForm } from '@components/organisms/layout-with-form/layout-with-form';
import { PromoCode } from '../../components/molecules/promo-code/promo-code';

import { isIOS } from '@services/helpers/device-utils';

import { SettingsStyled as Styled } from './settings.styles';

export const Settings = () => {
  return (
    <LayoutWithForm cssPropContainer={Styled.Container}>
      <Styled.Wrapper>
        <Styled.Header>
          <BackButton width={32} height={32} />
        </Styled.Header>
        <DeleteAccount />
        {isIOS && <PromoCode />}
      </Styled.Wrapper>
    </LayoutWithForm>
  );
};
