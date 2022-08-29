import React from 'react';

import { ModalWindow } from '@components/modal-window';
import { IModalWindowProps } from '@components/modal-window/modal-window.typings';

import { StyledModalBottom as Styled } from './modal-bottom.styles';

export const ModalBottom: React.FC<IModalWindowProps> = ({ children, ...modalProps }) => {
  return (
    <ModalWindow {...modalProps} positionVertical="flex-end">
      <Styled.ModalBottom>{children}</Styled.ModalBottom>
    </ModalWindow>
  );
};
