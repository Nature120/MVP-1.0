import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { libraries } from '@screens/immersions/mock-data';
import { AskModal } from '@components/ask-modal';
import { Button } from '@components/button';
import { GoalProgressBar } from '@components/goal-progress-bar';
import { Layout } from '@components/layout';
import { PracticeLibraries } from '@components/practice-libraries';
import { TipOfTheDay } from '@components/tip-of-the-day';

import { APP_ROUTES } from '@constants/routes';

import { StyledHome as Styled } from './home.styles';

import { COLOR } from '@theme/colors';

const name = 'Chelsea';

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const onToggleOpen = () => setIsOpen(prev => !prev);
  const closeModal = () => setIsOpen(false);

  const onButtonPress = async (value: string) => {
    if (value.trim()) {
      //TODO Record to DB
      console.log('🛑 ~ value', value);
    }
    navigateToImmersions();
  };

  const navigateToImmersions = () => {
    closeModal();
    setTimeout(() => {
      navigate(APP_ROUTES.immersions as never);
    }, 500);
  };

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
          <Styled.Greeting>Hi, {name}</Styled.Greeting>
          <Styled.MotivationText>Here’s a look at your progress this week. Keep it up!</Styled.MotivationText>

          <GoalProgressBar minutes={39} maxMinutes={120} />

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
