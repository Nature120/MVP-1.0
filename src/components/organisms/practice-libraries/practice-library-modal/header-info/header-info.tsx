import React from 'react';

import { HeaderInfoStyled as Styled } from './header-info.styles';

interface IProp {
  userGoals: string[];
  isImmersionTimerModal?: boolean;
  onToggleInfo: () => void;
  toggleInfo: boolean;
  isAudioFile?: boolean;
}

export const HeaderInfo: React.FC<IProp> = ({
  userGoals,
  isImmersionTimerModal,
  onToggleInfo,
  toggleInfo,
  isAudioFile,
}) => {
  return (
    <>
      {userGoals[0] && (
        <Styled.TypeContainer>
          <Styled.Type numberOfLines={1}>{userGoals[0]}</Styled.Type>
        </Styled.TypeContainer>
      )}
      {!isImmersionTimerModal
        ? isAudioFile && (
            <Styled.AudioLabel>
              <Styled.AudioLabelText>Audio</Styled.AudioLabelText>
            </Styled.AudioLabel>
          )
        : isAudioFile && (
            <Styled.AudioBtn onPress={onToggleInfo}>
              <Styled.AudioLabelText>{toggleInfo ? 'Text' : 'Audio'}</Styled.AudioLabelText>
            </Styled.AudioBtn>
          )}
    </>
  );
};
