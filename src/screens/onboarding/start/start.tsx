import React, { useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import { Layout } from '@components/layout';
import { LayoutOnboarding } from '@components/layout-onboarding';

import { updateUser } from '@services/api.service';
import { getPartialStyledText } from '@services/helpers/get-partial-styled-text';
import { useAppDispatch } from '@services/hooks/redux';
import { useSignOut } from '@services/hooks/sign-out';
import { IUser } from '@services/store/auth/auth.interface';
import { getUid } from '@services/store/auth/auth.selectors';

import { IMAGES } from '@constants/images';
import { ONBOARDING_GOAL_HASH_MAP, whatBringsVariants } from '@screens/onboarding/onboarding.constants';

import { TDailyGoal } from '@typings/common';

import { imageStyle, StyledStart as Styled } from './start.styles';

import { OnboardingCard, OnboardingTitle } from '@theme/components';

export const Start: React.FC = () => {
  const { onSignOut } = useSignOut();
  const uid = useSelector(getUid);
  const dispatch = useAppDispatch();

  const getPartialBoldText = (str: string) =>
    getPartialStyledText(str, (line, isMatch, index) => (
      <Styled.CardText key={line + index} isBold={isMatch}>
        {line}
      </Styled.CardText>
    ));

  useEffect(() => {
    const setDefaultUserProperties = async () => {
      const defaultProperties: Partial<IUser> = {
        dailyGoal: +Object.keys(ONBOARDING_GOAL_HASH_MAP)[0] as TDailyGoal,
        goal: 0,
        whatBrings: [whatBringsVariants[0].text.toLowerCase().replace(/ /g, '_')],
      };
      await updateUser(uid, defaultProperties, dispatch);
    };

    uid && setDefaultUserProperties();
  }, [uid]);

  return (
    <ImageBackground source={IMAGES.onBoardStart} style={imageStyle}>
      <Layout>
        <LayoutOnboarding buttonText="CONTINUE" onBackButtonPress={onSignOut}>
          <Styled.Card>
            <OnboardingCard>
              <OnboardingTitle>You’re not alone.</OnboardingTitle>
              <Styled.CardText>
                {getPartialBoldText(
                  'Welcome to our community of [25 million people] with a collective passion for inspiring human & planetary flourishing through our [re-connection with Nature.]',
                )}
              </Styled.CardText>
            </OnboardingCard>
          </Styled.Card>
        </LayoutOnboarding>
      </Layout>
    </ImageBackground>
  );
};
