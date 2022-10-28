import React from 'react';

import { Button } from '@components/atoms/button';
import { Line } from '@components/atoms/line';
import { Spacer } from '@components/atoms/spacer';
import { BackButton } from '@components/molecules/back-button';
import { Layout } from '@components/molecules/layout';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { PracticeLibraries } from '@components/organisms/practice-libraries';
import { PracticeLibrariesPagination } from '@components/organisms/practice-libraries/practice-libraries-pagination';
import { useImmersions } from './immersions.state';

import { StyledImmersions as Styled } from './immersions.styles';

import { COLOR } from '@theme/colors';

export const Immersions: React.FC = () => {
  const { recentLibraries, onStartTimer, isLoading, whatBrings } = useImmersions();

  return (
    <Styled.Wrapper>
      <Layout
        isWithoutMargin
        isWithScroll
        bgColor="extraLightMint"
        elasticScrollColor={COLOR.background.white}
        elasticScrollPosition="bottom">
        <Styled.LayoutContent>
          <Styled.Immersions>
            <Styled.Header>
              <BackButton color="cloudyGreen" height={18} width={18} iconType="cross" />
            </Styled.Header>

            <Styled.Title>Make the most of your time</Styled.Title>
            <Styled.SubTitle>
              Choosing an immersion can help guide your time in nature. You can skip this step.
            </Styled.SubTitle>

            <Line marginTop={24} marginBottom={28} />

            <TogglerDoNotDisturb marginBottom={48} />
          </Styled.Immersions>

          {whatBrings && <PracticeLibrariesPagination title="Most Popular" documentId={whatBrings} />}

          <Spacer gap={20} />

          {!!recentLibraries.length && (
            <PracticeLibraries title={'Recent Immersions'} libraries={recentLibraries} isWithoutAskModal />
          )}
          <Spacer gap={20} />
        </Styled.LayoutContent>
      </Layout>

      <Styled.SafeAreaView>
        <Styled.ButtonWrapper>
          <Button buttonText="START TIMER" height={50} onPress={onStartTimer} isDisabled={isLoading} />
        </Styled.ButtonWrapper>
      </Styled.SafeAreaView>
    </Styled.Wrapper>
  );
};
