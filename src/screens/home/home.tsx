import React from 'react';
import { View } from 'react-native';

import { Button } from '@components/button';
import { Layout } from '@components/layout';
import { PracticeLibraries } from '@components/practice-libraries';
import { IPracticeLibraryProps } from '@components/practice-libraries/practice-library/practice-library.typings';
import { TipOfTheDay } from '@components/tip-of-the-day';

import { isIOS } from '@services/helpers/device-utils';

import { StyledHome as Styled } from './home.styles';

const libraries: IPracticeLibraryProps[] = [
  {
    image: 'https://i.postimg.cc/pVfG29Wq/n1.jpg',
    type: 'Reconnect',
    title: 'Air Air Air Air Air Air Air Air Awareness',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice',
  },
  {
    image: 'https://i.postimg.cc/C5S4ZNhJ/n2.jpg',
    type: 'Reconnect2',
    title: 'Air Awareness2',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice ',
  },
  {
    image: 'https://i.postimg.cc/GhMj2GZJ/n3.jpg',
    type: 'Reconnect3',
    title: 'Air Awareness3',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice',
  },
  {
    image: 'https://i.postimg.cc/NM76wH6X/n4.webp',
    type: 'Reconnect4',
    title: 'Air Awareness4',
    description:
      'Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice Sense, or ‘touch’ the air. What do you hear, notice',
  },
];

export const Home: React.FC = () => {
  const name = 'Chelsea';

  const onButtonPress = () => {
    console.log('onButtonPress');
  };
  return (
    <Layout
      isWithScroll
      isWithoutMargin
      bgColor="extraLightMint"
      elasticScrollColor="#fff"
      elasticScrollPosition="bottom">
      <Styled.MainSection>
        <Styled.Greeting>Hi, {name}</Styled.Greeting>
        <Styled.MotivationText>Here’s a look at your progress this week. Keep it up!</Styled.MotivationText>

        <Styled.TimerWrapper>
          <Styled.MockTimer />
        </Styled.TimerWrapper>

        <Styled.ButtonWrapper>
          <Button height={50} buttonText="LET’S GO OUTSIDE" onPress={onButtonPress} />
        </Styled.ButtonWrapper>
      </Styled.MainSection>

      <Styled.InfoSectionWrapper>
        <PracticeLibraries title="Picked For You" libraries={libraries} />

        <Styled.InfoSection>
          <TipOfTheDay />
        </Styled.InfoSection>
      </Styled.InfoSectionWrapper>
    </Layout>
  );
};
