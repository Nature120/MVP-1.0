import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/atoms/button';
import { BackButton } from '@components/molecules/back-button';
import { Layout } from '@components/molecules/layout';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { PracticeLibraries } from '@components/organisms/practice-libraries';
import { recentLibraries } from './mock-data';

import { APP_ROUTES } from '@constants/routes';

import { StyledImmersions as Styled } from './immersions.styles';

import { COLOR } from '@theme/colors';
import { Line, Spacer } from '@theme/components';

export const Immersions: React.FC = () => {
  const [isDoNotDisturb, setIsDoNotDisturb] = useState(false);
  const { navigate } = useNavigation();

  const onStartTimer = () => {
    if (recentLibraries.length) {
      navigate(APP_ROUTES.immersionTimer as never, recentLibraries[0] as never);
    } else {
      navigate(APP_ROUTES.practices as never);
    }
  };

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

            <TogglerDoNotDisturb
              marginBottom={48}
              isDoNotDisturb={isDoNotDisturb}
              setIsDoNotDisturb={setIsDoNotDisturb}
            />
          </Styled.Immersions>

          <PracticeLibraries title="Recent Immersions" libraries={recentLibraries} />
          <Spacer gap={20} />
        </Styled.LayoutContent>
      </Layout>

      <Styled.SafeAreaView>
        <Styled.ButtonWrapper>
          <Button buttonText="START TIMER" height={50} onPress={onStartTimer} />
        </Styled.ButtonWrapper>
      </Styled.SafeAreaView>
    </Styled.Wrapper>
  );
};
