import React from 'react';

import { Button } from '@components/atoms/button';
import { Loader } from '@components/atoms/loader/loader';
import { ModalWindow } from '@components/atoms/modal-window';
import { Spacer } from '@components/atoms/spacer';
import { Layout } from '@components/molecules/layout';
import { Rings } from '@components/organisms/rings';
import { useImmersionChange } from './immersion-change.state';

import { IMAGES } from '@constants/images';

import { ImmersionChangeStyled as Styled } from './immersion-change.styles';

import { COLOR } from '@theme/colors';

export const ImmersionChange: React.FC = () => {
  const { weeklyGoal, immersion, onDone, onDelete, isLoading, setImmersion, isOpen, onClose, onOpen } =
    useImmersionChange();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Styled.ImmersionChange>
      <ModalWindow isVisible={isOpen} positionVertical="center" onClose={onClose}>
        <Styled.ModalButtonWrapper>
          <Styled.ModalTitle>Do you want to delete immersion information?</Styled.ModalTitle>
          <Spacer gap={8} />
          <Button buttonText="Close" height={50} onPress={onClose} />
          <Spacer gap={16} />
          <Button buttonText="Delete" height={50} onPress={onDelete} buttonColor="red" />
        </Styled.ModalButtonWrapper>
      </ModalWindow>

      <Layout
        isWithScroll
        isWithoutMargin
        bgColor="extraLightMint"
        elasticScrollColor={COLOR.background.white}
        elasticScrollPosition="bottom">
        <Styled.MainSection>
          <Styled.Title>Edit the immersion!</Styled.Title>
          <Styled.Subtitle>You can edit the immersion information or delete it</Styled.Subtitle>

          <Styled.ProgressBar>
            <Rings minutes={immersion || 0} maxMinutes={weeklyGoal} isChangeImmersion setImmersion={setImmersion} />
          </Styled.ProgressBar>

          <Styled.Image source={IMAGES.wave} />
        </Styled.MainSection>
      </Layout>

      <Styled.SafeAreaView>
        <Styled.ButtonWrapper>
          <Button buttonText="Delete" height={50} onPress={onOpen} />
          <Spacer gap={16} />
          <Button buttonText="Confirm" height={50} onPress={onDone} />
        </Styled.ButtonWrapper>
      </Styled.SafeAreaView>
    </Styled.ImmersionChange>
  );
};
