import React from 'react';

import { Button } from '@components/atoms/button';
import { CenterContainer } from '@components/atoms/center-container';
import { Line } from '@components/atoms/line';
import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { TipOfTheDay } from '@components/molecules/tip-of-the-day';
import { PracticeLibrariesPagination } from '@components/organisms/practice-libraries/practice-libraries-pagination';
import { Rings } from '@components/organisms/rings';
import { useHome } from './home.state';

import { StyledHome as Styled } from './home.styles';

import { COLOR } from '@theme/colors';

export const Home: React.FC = () => {
  const { user, weeklyGoal, isOpen, onToggleOpen, closeModal, saveResponse, navigateToImmersions } = useHome();

  return (
    <>
      <AskModal
        isVisible={isOpen}
        onClose={closeModal}
        onButtonPress={saveResponse}
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

          <CenterContainer>
            {!!weeklyGoal && <Rings maxMinutes={weeklyGoal} minutes={user.goal || 0} />}
          </CenterContainer>

          <Styled.ButtonWrapper>
            <Button height={50} buttonText="LET’S GO OUTSIDE" onPress={onToggleOpen} />
          </Styled.ButtonWrapper>
        </Styled.MainSection>

        <Styled.InfoSectionWrapper>
          {user.whatBrings && <PracticeLibrariesPagination title="Picked For You" documentId={user.whatBrings} />}

          <Styled.InfoSection>
            <Line marginTop={12} />

            <TipOfTheDay userTipOfTheDay={user.tipOfTheDay} />
          </Styled.InfoSection>
        </Styled.InfoSectionWrapper>
      </Layout>
    </>
  );
};
