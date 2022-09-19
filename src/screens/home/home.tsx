import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { libraries } from '@screens/immersions/mock-data';
import { AskModal } from '@components/ask-modal';
import { Button } from '@components/button';
import { Image } from '@components/image';
import { Layout } from '@components/layout';
import { PracticeLibraries } from '@components/practice-libraries';
import { Rings } from '@components/rings';
import { TipOfTheDay } from '@components/tip-of-the-day';
import { useHome } from './home.state';

import { URI } from '@constants/images';

import { StyledHome as Styled } from './home.styles';

import { COLOR } from '@theme/colors';
import { CenterContainer } from '@theme/components';

export const Home: React.FC = () => {
  const { user, weeklyGoal, isOpen, onToggleOpen, closeModal, onButtonPress, navigateToImmersions } = useHome();

  const [temp, setTempe] = useState(190);

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

          <Image
            styles={{ backgroundColor: 'transparent' }}
            width={150}
            height={150}
            source={{ uri: URI.mask }}
            borderRadius={75}
            priority={'high'}
          />

          <TouchableOpacity onPress={() => setTempe(prev => prev + 20)}>
            <Text>+++++ </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setTempe(prev => prev - 20)}>
            <Text>------ </Text>
          </TouchableOpacity>

          <CenterContainer>
            <Rings maxMinutes={weeklyGoal || 120} minutes={temp} />
          </CenterContainer>

          <Styled.ButtonWrapper>
            <Button height={50} buttonText="LET’S GO OUTSIDE" onPress={onToggleOpen} />
          </Styled.ButtonWrapper>
        </Styled.MainSection>

        <Styled.InfoSectionWrapper>
          <PracticeLibraries title="Picked For You" libraries={libraries} isWithoutActions />

          <Styled.InfoSection>
            <TipOfTheDay />
          </Styled.InfoSection>
        </Styled.InfoSectionWrapper>
      </Layout>
    </>
  );
};
