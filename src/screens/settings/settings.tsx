import React from 'react';

import { DeleteAccount } from '@components/organisms/delete-account/delete-account';
import { LayoutWithForm } from '@components/organisms/layout-with-form/layout-with-form';

import { SettingsStyled as Styled } from './settings.styles';

export const Settings = () => {
  return (
    <LayoutWithForm cssPropContainer={Styled.Container}>
      <DeleteAccount />
    </LayoutWithForm>
  );
};
