import React from 'react';

import { ModalWindow } from '@components/atoms/modal-window';
import { ButtonIcon } from '@components/molecules/button-icon';

import { DeleteAskModalStyled as Styled } from './delete-ask-modal-styles';

interface IProps {
  isVisible: boolean;
  onCloseModal: () => void;
  deleteUser: () => void;
}

export const DeleteAskModal: React.FC<IProps> = ({ isVisible, onCloseModal, deleteUser }) => {
  return (
    <ModalWindow isVisible={isVisible} onClose={onCloseModal} positionVertical="center" positionHorizontal="center">
      <Styled.ContainerWrapper>
        <ButtonIcon type="arrowLeft" colorIcon="cloudyGreen" size={24} onPress={onCloseModal} />
        <Styled.Text>All data along with the account will be deleted.</Styled.Text>
        <Styled.TextQuestion>Are you sure?</Styled.TextQuestion>
        <Styled.ButtonWrapper>
          <Styled.Btn onPress={deleteUser}>
            <Styled.BtnText>Yes</Styled.BtnText>
          </Styled.Btn>
          <Styled.Btn onPress={onCloseModal}>
            <Styled.BtnText>No</Styled.BtnText>
          </Styled.Btn>
        </Styled.ButtonWrapper>
      </Styled.ContainerWrapper>
    </ModalWindow>
  );
};
