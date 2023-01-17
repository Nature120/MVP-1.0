import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';

import { IPropInfo } from '../media-player.typings';

import { CollapsedPlayerStyled as Styled } from './collapsed-player.styles';

export const CollapsedPlayer: React.FC<IPropInfo> = ({ audioInfo, practiceInfo }) => {
  const { image, title } = practiceInfo;
  const { onPressPlayPause, isPlaying, onPressRepeat, repeatMode } = audioInfo;

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Image source={{ uri: image }} width={35} height={35} styles={Styled.Image} />
        <Styled.Title numberOfLines={1}>{title}</Styled.Title>
      </Styled.Wrapper>
      <Styled.Wrapper>
        <Styled.PlayBtn onPress={onPressPlayPause}>
          <Icon type={isPlaying ? 'player_pause' : 'player_play'} size={24} />
        </Styled.PlayBtn>
        <TouchableOpacity onPress={onPressRepeat}>
          <Icon type={repeatMode ? 'player_repeat_once' : 'player_repeat'} size={24} />
        </TouchableOpacity>
      </Styled.Wrapper>
    </Styled.Container>
  );
};
