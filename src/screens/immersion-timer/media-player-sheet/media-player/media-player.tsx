import React from 'react';
import { Pressable } from 'react-native';
import { useBottomSheet } from '@gorhom/bottom-sheet';

import { CollapsedPlayer } from './collapsed-player/collapsed-player';
import { ExpandedPlayer } from './expanded-player/expanded-player';
import { useMediaPlayerState } from './media-player.state';

import { IProp } from './media-player.typings';

import { MediaPlayerStyled as Styled } from './media-player.styles';

export const MediaPlayer: React.FC<IProp> = ({ audioFile, isCollapsed, practiceInfo }) => {
  const { isPlayerReady, ...audioInfo } = useMediaPlayerState(audioFile);

  const { snapTo } = useBottomSheet();

  if (!isPlayerReady) {
    return (
      <Styled.Container>
        <Styled.WorningText>Please wait, we loading the audio track...</Styled.WorningText>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      {isCollapsed ? (
        <Pressable onPress={() => snapTo(1)}>
          <CollapsedPlayer audioInfo={audioInfo} practiceInfo={practiceInfo} />
        </Pressable>
      ) : (
        <>
          <ExpandedPlayer audioInfo={audioInfo} practiceInfo={practiceInfo} />
        </>
      )}
    </Styled.Container>
  );
};
