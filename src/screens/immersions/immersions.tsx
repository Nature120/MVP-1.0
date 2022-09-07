import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '@components/back-button/back-button';
import { Button } from '@components/button';
import { Layout } from '@components/layout';
import { PracticeLibraries } from '@components/practice-libraries';
import { TogglerDoNotDisturb } from '@components/toggler-do-not-disturb';
import { libraries, recentLibraries } from './mock-data';

import { handleNavigate } from '@services/helpers/handle-navigate';

import { APP_ROUTES } from '@constants/routes';

import { StyledImmersions as Styled } from './immersions.styles';

import { COLOR } from '@theme/colors';
import { Line, Spacer } from '@theme/components';

export const Immersions: React.FC = () => {
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  const { navigate } = useNavigation();

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

            <Line mt={24} mb={28} />

            <TogglerDoNotDisturb mb={48} isDoNotDisturb={isDoNotDisturb} setIsDoNotDisturb={setIsDoNotDisturb} />
          </Styled.Immersions>

          <PracticeLibraries title="Picked For You" libraries={libraries} isWithForwardArrow />
          <Spacer gap={48} />
          <PracticeLibraries title="Recent Immersions" libraries={recentLibraries} />
          <Spacer gap={20} />
        </Styled.LayoutContent>
      </Layout>

      <Styled.SafeAreaView>
        <Styled.ButtonWrapper>
          <Button buttonText="START TIMER" height={50} onPress={handleNavigate(navigate, APP_ROUTES.immersionTimer)} />
        </Styled.ButtonWrapper>
      </Styled.SafeAreaView>
    </Styled.Wrapper>
  );
};