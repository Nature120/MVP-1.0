import React from 'react';
import { TouchableOpacity } from 'react-native';

import { DynamicHeader } from '@screens/home/atoms/dynamic-header';
import { Button } from '@components/atoms/button';
import { CenterContainer } from '@components/atoms/center-container';
import { Icon } from '@components/atoms/icon';
import { Line } from '@components/atoms/line';
import { AskModal } from '@components/molecules/ask-modal';
import { Layout } from '@components/molecules/layout';
import { TipOfTheDay } from '@components/molecules/tip-of-the-day';
import { MoodSummary } from '@components/organisms/mood-summary';
import { PracticeLibrariesPagination } from '@components/organisms/practice-libraries/practice-libraries-pagination';
import { Rings } from '@components/organisms/rings';
import { useHome } from './home.state';

import { getFormattedDateRange } from '@services/helpers/utils';

import { BURGER_MENU_WIDTH, StyledHome as Styled } from './home.styles';

import { COLOR } from '@theme/colors';

const hitSlop = { top: 10, bottom: 10, left: 10, right: 10 };

export const Home: React.FC = () => {
  const {
    user,
    weeklyGoal,
    isOpen,
    onPressDrawer,
    onToggleOpen,
    closeModal,
    saveResponse,
    navigateToImmersions,
    onConfirmPress,
  } = useHome();

  const goal = user.goal || 0;
  const thisWeekRange = getFormattedDateRange(new Date(), 'd MMM').toUpperCase();

  return (
    <>
      <AskModal
        isVisible={isOpen}
        onClose={closeModal}
        onButtonPress={saveResponse}
        onTextPress={navigateToImmersions}
        onConfirmPress={onConfirmPress}
      />

      <Layout
        isWithScroll
        isWithoutMargin
        bgColor="extraLightMint"
        elasticScrollColor={COLOR.background.white}
        elasticScrollPosition="bottom">
        <Styled.MainSection>
          <Styled.Header>
            <Styled.Greeting>Hi, {user.first_name}</Styled.Greeting>
            <TouchableOpacity onPress={onPressDrawer} hitSlop={hitSlop}>
              <Icon width={BURGER_MENU_WIDTH} height={25} type="menu" colorIcon="cloudyGreen" />
            </TouchableOpacity>
          </Styled.Header>
          <DynamicHeader goal={goal} weeklyGoal={weeklyGoal} />

          <CenterContainer>
            {!!weeklyGoal && <Rings maxMinutes={weeklyGoal} minutes={goal} />}
            {/* FIXME */}
            {/* <Styled.WeekRange>{thisWeekRange}</Styled.WeekRange> */}
          </CenterContainer>

          <Styled.ButtonWrapper>
            <Button isWithShadow height={50} buttonText="LET’S GO OUTSIDE" onPress={onToggleOpen} />
          </Styled.ButtonWrapper>
        </Styled.MainSection>

        <Styled.InfoSectionWrapper>
          {user.whatBrings && <PracticeLibrariesPagination title="Picked For You" documentId={user.whatBrings} />}

          <Styled.InfoSection>
            <MoodSummary />

            <Line marginTop={22} />
            <TipOfTheDay userTipOfTheDay={user.tipOfTheDay} />
          </Styled.InfoSection>
        </Styled.InfoSectionWrapper>
      </Layout>
    </>
  );
};
