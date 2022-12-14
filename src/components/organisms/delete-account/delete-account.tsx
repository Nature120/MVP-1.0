import React from 'react';

import { BackButton } from '@components/molecules/back-button';
import { DeleteAskModal } from '@components/organisms/delete-account/delete-ask-modal/delete-ask-modal';
import { SocialButtonGroup } from '@components/organisms/social-button-group/social-button-group';
import { useStateDeleteAccount } from './delete-account.state';
import { DeleteConfirmForm } from './delete-confirm-form/delete-confirm-form';

import { DeleteAccountStyled as Styled } from './delete-account.styles';

export const DeleteAccount = () => {
  const { isVisibleModal, onCloseModal, errorMessage, setPassword, resetError, onPressSocialBtn, deleteUser } =
    useStateDeleteAccount();
  return (
    <>
      <DeleteAskModal isVisible={isVisibleModal} onCloseModal={onCloseModal} deleteUser={deleteUser} />
      <Styled.InnerWrapper>
        <Styled.Header>
          <BackButton width={32} height={32} />
        </Styled.Header>
        <Styled.Title>Delete your account</Styled.Title>
        <Styled.TipsContainer>
          <Styled.Tip>Tip:</Styled.Tip>
          <Styled.Tip>If you registered through the form, use the form. Otherwise use the social buttons.</Styled.Tip>
        </Styled.TipsContainer>
        <DeleteConfirmForm
          resetError={resetError}
          errorMessage={errorMessage}
          setPassword={setPassword}
          onPressSocialBtn={() => onPressSocialBtn('form')}
        />
        <SocialButtonGroup
          nameOfScreen="settings"
          onAppleButtonPress={() => onPressSocialBtn('apple')}
          onFacebookButtonPress={() => onPressSocialBtn('facebook')}
          onGoogleButtonPress={() => onPressSocialBtn('google')}
        />
      </Styled.InnerWrapper>
    </>
  );
};
