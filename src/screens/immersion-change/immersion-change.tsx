import React from 'react';

import { Button } from '@components/atoms/button';
import { Loader } from '@components/atoms/loader/loader';
import { Spacer } from '@components/atoms/spacer';
import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { Rings } from '@components/organisms/rings';
import { useImmersionChange } from './immersion-change.state';

import { IMAGES } from '@constants/images';

import { ImmersionChangeStyled as Styled } from './immersion-change.styles';

import { COLOR } from '@theme/colors';

export const ImmersionChange: React.FC = () => {
  const {
    weeklyGoal,
    immersion,
    isLoading,
    setImmersion,
    onTextPress,
    saveResponse,
    isOpenAskModal,
    toggleOpenAskModal,
  } = useImmersionChange();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Styled.ImmersionChange>
      <AskModal
        isVisible={isOpenAskModal}
        onClose={toggleOpenAskModal}
        onButtonPress={saveResponse}
        onTextPress={onTextPress}
        titleText={'now'}
        isWithTrack
      />

      <Layout
        isWithScroll
        isWithoutMargin
        bgColor="extraLightMint"
        elasticScrollColor={COLOR.background.white}
        elasticScrollPosition="bottom">
        <Styled.MainSection>
          <Styled.Title>Edit the immersion!</Styled.Title>
          <Styled.Subtitle>You can edit the duration of your immersion by clicking the pencil icon</Styled.Subtitle>

          <Styled.ProgressBar>
            <Rings minutes={immersion || 0} maxMinutes={weeklyGoal} isChangeImmersion setImmersion={setImmersion} />
          </Styled.ProgressBar>

          <Styled.Image source={IMAGES.wave} resizeMode="cover" />
        </Styled.MainSection>
      </Layout>

      <Styled.SafeAreaView>
        <Styled.ButtonWrapper>
          <Spacer gap={16} />
          <Button buttonText="Confirm" height={50} onPress={toggleOpenAskModal} />
        </Styled.ButtonWrapper>
      </Styled.SafeAreaView>
    </Styled.ImmersionChange>
  );
};
