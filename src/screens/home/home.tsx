import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { libraries } from '@screens/immersions/mock-data';
import { AskModal } from '@components/ask-modal';
import { Button } from '@components/button';
import { Layout } from '@components/layout';
import { PracticeLibraries } from '@components/practice-libraries';
import { Rings } from '@components/rings';
import { TipOfTheDay } from '@components/tip-of-the-day';
import { useHome } from './home.state';

import { StyledHome as Styled } from './home.styles';

import { COLOR } from '@theme/colors';
import { CenterContainer } from '@theme/components';

export const Home: React.FC = () => {
  const { user, weeklyGoal, isOpen, onToggleOpen, closeModal, onButtonPress, navigateToImmersions } = useHome();

  const [temp, setTempe] = useState(110);

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

          <TouchableOpacity onPress={() => setTempe(prev => prev + 20)}>
            <Text>+++++ </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTempe(prev => prev - 20)}>
            <Text>------ </Text>
          </TouchableOpacity>

          <CenterContainer>
            <Rings maxMinutes={weeklyGoal} minutes={temp} />
          </CenterContainer>

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
