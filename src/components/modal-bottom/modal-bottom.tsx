import React from 'react';

import { ModalWindow } from '@components/modal-window';

import { IMAGES } from '@constants/images';

import { IModalBottomProps } from './modal-bottom.typings';

import { StyledModalBottom as Styled } from './modal-bottom.styles';

export const ModalBottom: React.FC<IModalBottomProps> = ({ children, isWithLogo, ...modalProps }) => {
  return (
    <ModalWindow {...modalProps} positionVertical="flex-end">
      <Styled.ModalBottom>
        {isWithLogo && <Styled.Logo source={IMAGES.logo} />}
        {children}
      </Styled.ModalBottom>
    </ModalWindow>
  );
};
