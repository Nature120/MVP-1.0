import React from 'react';
import { ScrollView } from 'react-native';

import { useStateCommunitySplash } from './community-splash.state';
import { CommunitySplashFooter } from './community-splash-footer/community-splash-footer';
import { CommunitySplashHeader } from './community-splash-header/community-splash-header';
import { CommunitySplashMain } from './community-splash-main/community-splash-main';

import { CommunitySplashStyled as Styled } from './community-splash.styles';

export const CommunitySplash = () => {
  const { onCloseModal } = useStateCommunitySplash();

  return (
    <Styled.Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <CommunitySplashHeader onCloseModal={onCloseModal} />
        <CommunitySplashMain />
        <CommunitySplashFooter onCloseModal={onCloseModal} />
      </ScrollView>
    </Styled.Container>
  );
};
