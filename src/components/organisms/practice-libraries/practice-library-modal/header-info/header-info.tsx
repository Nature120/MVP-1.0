import React from 'react';

import { Icon } from '@components/atoms/icon';

import { HeaderInfoStyled as Styled } from './header-info.styles';

interface IProp {
  userGoals: string[];
  isAudioFile: boolean;
}

export const HeaderInfo: React.FC<IProp> = ({ userGoals, isAudioFile }) => {
  return (
    <>
      {userGoals[0] && (
        <Styled.TypeContainer>
          <Styled.Type numberOfLines={1}>{userGoals[0]}</Styled.Type>
        </Styled.TypeContainer>
      )}
      {isAudioFile && (
        <Styled.AudioLabel>
          <Icon type="speaker_high" size={20} colorIcon="white" />
        </Styled.AudioLabel>
      )}
    </>
  );
};
