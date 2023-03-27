import React from 'react';

import { Button } from '@components/atoms/button';

import { TParam } from '../community-splash.typings';

import { CommunitySplashFooterStyled as Styled } from './community-splash-footer.styles';

export const CommunitySplashFooter = ({ onCloseModal }: TParam) => {
  return (
    <Styled.Container>
      <Button styles={Styled.Button} buttonText="CHECK IT OUT" onPress={onCloseModal} />
    </Styled.Container>
  );
};
