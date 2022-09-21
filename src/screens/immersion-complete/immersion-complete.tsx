import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { libraries } from '@screens/immersions/mock-data';
import { Button } from '@components/atoms/button';
import { ImmersionsDaily } from '@components/molecules/immersions-daily';
import { Layout } from '@components/molecules/layout';
import { PracticeLibraries } from '@components/organisms/practice-libraries';
import { Rings } from '@components/organisms/rings';

import { updateUser } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useParam } from '@services/hooks/param';
import { useAppDispatch } from '@services/hooks/redux';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { APP_ROUTES } from '@constants/routes';

import { IAddedTime } from '@typings/common';

import { StyledImmersionComplete as Styled } from './immersion-complete.styles';

import { COLOR } from '@theme/colors';

export const ImmersionComplete: React.FC = () => {
  const { params } = useParam<IAddedTime>();
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const { weeklyGoal } = useGoal();

  const onDone = async () => {
    await updateUser(user.uid, { goal: user.goal! + params.addedTime }, dispatch);
    navigate(APP_ROUTES.dashboard as never);
  };

  return (
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
            {<Rings maxMinutes={weeklyGoal} minutes={user.goal || 0} addedTime={params.addedTime} />}
          </Styled.ProgressBar>
        </Styled.MainSection>

        <Styled.InfoSectionWrapper>
          <Styled.InfoSection>
            <ImmersionsDaily />
          </Styled.InfoSection>

          <PracticeLibraries title="Today" libraries={[libraries[0]]} isWithoutActions />
        </Styled.InfoSectionWrapper>
      </Layout>

      <Styled.SafeAreaView>
        <Styled.ButtonWrapper>
          <Button buttonText="done" height={50} onPress={onDone} />
        </Styled.ButtonWrapper>
      </Styled.SafeAreaView>
    </Styled.ImmersionComplete>
  );
};
