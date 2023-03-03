import React from 'react';

import { Icon } from '@components/atoms/icon';

import { IMAGES } from '@constants/images';

import { TParam } from '../community-splash.typings';

import { CommunitySplashHeaderStyled as Styled } from './community-splash-header.styles';

export const CommunitySplashHeader = ({ onCloseModal }: TParam) => {
  return (
    <Styled.Container>
      <Styled.Image source={IMAGES.handWithPlant} resizeMode={'cover'} />
      <Styled.CloseBtn onPress={onCloseModal}>
        <Icon type="cross" size={18} colorIcon={'cloudyBlue'} />
      </Styled.CloseBtn>
    </Styled.Container>
  );
};
