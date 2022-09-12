import React from 'react';

import { libraries } from '@screens/immersions/mock-data';
import { AskModal } from '@components/ask-modal';
import { Button } from '@components/button';
import { GoalProgressBar } from '@components/goal-progress-bar';
import { Layout } from '@components/layout';
import { PracticeLibraries } from '@components/practice-libraries';
import { TipOfTheDay } from '@components/tip-of-the-day';
import { useHome } from './home.state';

import { StyledHome as Styled } from './home.styles';

import { COLOR } from '@theme/colors';

export const Home: React.FC = () => {
  const { user, weeklyGoal, isOpen, onToggleOpen, closeModal, onButtonPress, navigateToImmersions } = useHome();

  return (
    <>
      <AskModal
        isVisible={isOpen}
        onClose={closeModal}
        onButtonPress={onButtonPress}
        onTextPress={navigateToImmersions}
      />

      <Layout
        isWithScroll
        isWithoutMargin
        bgColor="extraLightMint"
        elasticScrollColor={COLOR.background.white}
        elasticScrollPosition="bottom">
        <Styled.MainSection>
          <Styled.Greeting>Hi, {user.first_name}</Styled.Greeting>
          <Styled.MotivationText>Here’s a look at your progress this week. Keep it up!</Styled.MotivationText>

          {!!weeklyGoal && <GoalProgressBar minutes={user?.goal || 0} maxMinutes={weeklyGoal} />}

          <Styled.ButtonWrapper>
            <Button height={50} buttonText="LET’S GO OUTSIDE" onPress={onToggleOpen} />
          </Styled.ButtonWrapper>
        </Styled.MainSection>

        <Styled.InfoSectionWrapper>
          <PracticeLibraries title="Picked For You" libraries={libraries} />

          <Styled.InfoSection>
            <TipOfTheDay />
          </Styled.InfoSection>
        </Styled.InfoSectionWrapper>
      </Layout>
    </>
  );
};
