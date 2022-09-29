import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { isToday } from 'date-fns';

import { Button } from '@components/atoms/button';
import { ImmersionsDaily } from '@components/molecules/immersions-daily';
import { Layout } from '@components/molecules/layout';
import { PracticeLibraries } from '@components/organisms/practice-libraries';
import { Rings } from '@components/organisms/rings';

import { BOTTOM_TAB_ROUTES } from '@navigation/navigation.constants';

import { databaseRef, updateUser } from '@services/api.service';
import { useGoal } from '@services/hooks/goal';
import { useParam } from '@services/hooks/param';
import { useAppDispatch } from '@services/hooks/redux';
import { getUserInfo } from '@services/store/auth/auth.selectors';

import { IAddedTime, IPracticeLibrary } from '@typings/common';

import { StyledImmersionComplete as Styled } from './immersion-complete.styles';

import { COLOR } from '@theme/colors';

export const ImmersionComplete: React.FC = () => {
  const { params } = useParam<IAddedTime>();
  const { navigate } = useNavigation();
  const user = useSelector(getUserInfo);
  const dispatch = useAppDispatch();
  const { weeklyGoal } = useGoal();
  const [todayImmersions, setTodayImmersions] = useState<IPracticeLibrary[]>([]);

  const getTodayImmersions = async () => {
    const finishedPractices = [...user.finishedPractices];
    finishedPractices.reverse();
    const uniqueLibraries = [...new Map(finishedPractices.map(item => [item.title, item])).values()];

    const today = uniqueLibraries
      .filter(practice => {
        let time;
        try {
          time = practice.created_at.getTime();
        } catch {
          time = (practice.created_at as unknown as { seconds: number }).seconds * 1000;
        }
        return isToday(time);
      })
      .map(practice => practice.title);

    const allLibraries = await databaseRef('Practise library').where('title', 'in', today).get();
    const librariesData = allLibraries.docs.map(lib => lib.data() as IPracticeLibrary);
    const sortedLibraries = today.map(title => librariesData.find(lib => lib.title === title)!);

    setTodayImmersions(sortedLibraries);
  };

  useEffect(() => {
    getTodayImmersions();
  }, []);

  const onDone = async () => {
    const goal = user.goal! + params.addedTime;
    await updateUser(user.uid, { goal }, dispatch);
    navigate(BOTTOM_TAB_ROUTES[0].name as never);
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

          <PracticeLibraries title="Today" libraries={todayImmersions} isWithoutActions />
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
