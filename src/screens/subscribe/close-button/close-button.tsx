import React from 'react';

import { BackButton } from '@components/molecules/back-button';
import { CloseButtonStyled as Styled } from './close-button.styled';

export const CloseButton = () => {
  return (
    <Styled.Container>
      <BackButton width={18} height={18} iconType="cross" />
    </Styled.Container>
  );
};
