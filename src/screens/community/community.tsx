import React from 'react';
import { Modal } from 'react-native';

import { useStateCommunity } from './community.state';
import { CommunityMain } from './community-main/community-main';
import { CommunitySplash } from './community-splash/community-splash';

import { StyledCommunity as Styled } from './community.styles';

export const Community: React.FC = () => {
  const { isFirstLaunchCommunity } = useStateCommunity();

  return (
    <Styled.Container>
      <Modal animationType="slide" transparent={false} visible={isFirstLaunchCommunity}>
        <CommunitySplash />
      </Modal>
      <Styled.Title>Community</Styled.Title>
      <CommunityMain />
    </Styled.Container>
  );
};
