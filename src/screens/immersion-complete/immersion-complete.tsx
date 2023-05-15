import React from 'react';

import { Button } from '@components/atoms/button';
import { Loader } from '@components/atoms/loader/loader';
import { ImmersionsDaily } from '@components/molecules/immersions-daily';
import { Layout } from '@components/molecules/layout';
import { PracticeLibraries } from '@components/organisms/practice-libraries';
import { Rings } from '@components/organisms/rings';
import { useImmersionComplete } from './immersion-complete.state';

import { IMAGES } from '@constants/images';

import { StyledImmersionComplete as Styled } from './immersion-complete.styles';

import { COLOR } from '@theme/colors';

export const ImmersionComplete: React.FC = () => {
  const { weeklyGoal, goal, addedTime, todayImmersions, onDone, isLoading } = useImmersionComplete();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Styled.ImmersionComplete>
          <Layout
            isWithScroll
            isWithoutMargin
            bgColor="extraLightMint"
            elasticScrollColor={COLOR.background.white}
            elasticScrollPosition="bottom">
            <Styled.MainSection>
              <Styled.Title>Great job!</Styled.Title>
              <Styled.Subtitile>This Week at a Glance</Styled.Subtitile>

              <Styled.ProgressBar>
                {<Rings maxMinutes={weeklyGoal} minutes={goal || 0} addedTime={addedTime} />}
              </Styled.ProgressBar>

              <Styled.Image source={IMAGES.wave} resizeMode={'cover'} />
            </Styled.MainSection>

            <Styled.InfoSectionWrapper>
              <Styled.InfoSection>
                <ImmersionsDaily />
              </Styled.InfoSection>

              <PracticeLibraries title="Today" libraries={todayImmersions} isWithoutActions />
            </Styled.InfoSectionWrapper>
          </Layout>

          <Styled.SafeAreaView>
            <Styled.ButtonWrapper>
              <Button buttonText="done" height={50} onPress={onDone} />
            </Styled.ButtonWrapper>
          </Styled.SafeAreaView>
        </Styled.ImmersionComplete>
      )}
    </>
  );
};
