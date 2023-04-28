import React from 'react';

import { Button } from '@components/atoms/button';
import { Icon } from '@components/atoms/icon';
import { ButtonIcon } from '@components/molecules/button-icon';
import { ModalBottom } from '@components/molecules/modal-bottom';
import { IModalChangeProps } from './modal-change.types';

import { StyledModalChange as Styled } from './modal-change.styles';

export const ModalChange: React.FC<IModalChangeProps> = ({ children, title, isOpen, onClose, onOpen, onDone }) => {
  return (
    <>
      <Styled.EditGoal onPress={onOpen}>
        <Icon type="pencil" colorIcon="darkBlue" size={25} />
      </Styled.EditGoal>

      <ModalBottom isVisible={isOpen} onClose={onClose} isWithLogo>
        <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onClose} />
        <Styled.ModalText>{title}</Styled.ModalText>

        {children}

        <Button buttonText="DONE" height={50} onPress={onDone} />
      </ModalBottom>
    </>
  );
};
