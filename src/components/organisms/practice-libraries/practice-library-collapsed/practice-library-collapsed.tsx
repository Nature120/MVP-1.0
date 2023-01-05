import React from 'react';
import { State, usePlaybackState } from 'react-native-track-player';

import { usePlayer } from '@screens/immersion-timer';
import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';
import { PracticeLibraryModal } from '../practice-library-modal';
import { useOnTogglePlayback } from './practice-library-collapsed.hooks';

import { useOpenCloseModal } from '@services/hooks/open-close';

import { IPracticeLibraryCollapsedProps } from './practice-library-collapsed.typings';

import {
  COLLAPSED_HEIGHT,
  IMAGE_WIDTH,
  StyledImage,
  StyledPracticeLibraryCollapsed as Styled,
} from './practice-library-collapsed.styles';

export const PracticeLibraryCollapsed: React.FC<IPracticeLibraryCollapsedProps> = ({ library }) => {
  const { isOpen, onToggle } = useOpenCloseModal();

  const state = usePlaybackState();
  const onTogglePlayback = useOnTogglePlayback();

  const { isAudioFile } = usePlayer();

  const handleAudioStatus = () => {
    if (state === State.None) {
      return;
    }
    return state === State.Playing;
  };

  const isPlaying = handleAudioStatus();

  return (
    <>
      <PracticeLibraryModal
        isOpen={isOpen}
        closeModal={onToggle}
        library={library}
        isWithoutActions={true}
        isImmersionTimerModal={true}
      />
      <Styled.CollapsedLibrary>
        <Styled.Left onPress={onToggle} activeOpacity={0.5}>
          <Styled.Title numberOfLines={1}>{library.title}</Styled.Title>
          <Styled.Description numberOfLines={2}>{library.description}</Styled.Description>
        </Styled.Left>

        <Styled.Right onPress={onTogglePlayback}>
          <Image source={{ uri: library.image }} width={IMAGE_WIDTH} height={COLLAPSED_HEIGHT} styles={StyledImage} />
          {library.userGoals[0] && (
            <Styled.TypeContainer>
              <Styled.Type numberOfLines={1}>{library.userGoals[0]}</Styled.Type>
            </Styled.TypeContainer>
          )}
          {isAudioFile && (
            <Styled.PlayerWrapper>
              {!isPlaying ? (
                <Icon type="play_player" size={40} colorIcon="white" />
              ) : (
                <Icon type="stop_player" size={40} colorIcon="white" />
              )}
            </Styled.PlayerWrapper>
          )}
        </Styled.Right>
      </Styled.CollapsedLibrary>
    </>
  );
};
