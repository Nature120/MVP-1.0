import React from 'react';
import { View } from 'react-native';

import { BackButton } from '@components/molecules/back-button';
import { ContainerWithForm } from '@components/organisms/container-with-form/container-with-form';
import { DeleteConfirmForm } from './delete-confirm-form/delete-confirm-form';

import { DeleteAccountStyled as Styled } from './delete-account.styles';

export const DeleteAccount = () => {
  const screenLayout = () => {
    return (
      <Styled.InnerWrapper>
        <Styled.Header>
          <BackButton width={32} height={32} />
        </Styled.Header>
        <View>
          <Styled.Title>Delete your account</Styled.Title>
          <DeleteConfirmForm />
        </View>
      </Styled.InnerWrapper>
    );
  };
  return (
    <>
      <ContainerWithForm layout={screenLayout} cssPropContainer={Styled.Container} />
    </>
  );
};
