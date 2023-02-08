import React from 'react';
import TrackPlayer from 'react-native-track-player';
import { Slider } from '@miblanchard/react-native-slider';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';

import { thumbStyles, thumbTouchSize } from './expanded-player.constants';
import { IMAGES } from '@constants/images';

import { IPropInfo } from '../media-player.typings';

import { ExpendedPlayerStyled as Styled } from './expanded-player.styles';

import { COLOR } from '@theme/colors';

export const ExpandedPlayer: React.FC<IPropInfo> = ({ audioInfo, practiceInfo }) => {
  const {
    coach,
    normalizePosition,
    position,
    duration,
    onPressRewindBack,
    normalizeDuration,
    onPressPlayPause,
    isPlaying,
    onPressRewindForward,
    onPressRepeat,
    repeatMode,
  } = audioInfo;

  const { title, image } = practiceInfo;
  const { fullName } = coach;

  const handleTrackPositionChange = (value: number | Array<number>) => {
    if (typeof value === 'number') {
      TrackPlayer.seekTo(value);
      return;
    }
    TrackPlayer.seekTo(Number(value.join('')));
  };

  return (
    <Styled.Container>
      <Styled.MoveLabel />
      <Styled.WrapperTrackInfo>
        <Image source={{ uri: image }} width={85} height={85} styles={Styled.Image} />
        <Styled.RightSideWrapper>
          <Styled.TitleInfo numberOfLines={2}>{title}</Styled.TitleInfo>
          <Styled.TextInfo>Narrated By</Styled.TextInfo>
          <Styled.AuthorText>{fullName}</Styled.AuthorText>
        </Styled.RightSideWrapper>
      </Styled.WrapperTrackInfo>
      <Styled.RepeatBtn onPress={onPressRepeat}>
        <Icon type={repeatMode ? 'player_repeat_once' : 'player_repeat'} size={24} />
      </Styled.RepeatBtn>
      <Slider
        step={1}
        value={position}
        minimumValue={0}
        maximumValue={duration}
        thumbImage={IMAGES.sun_palyer}
        animationType={'spring'}
        thumbStyle={thumbStyles}
        thumbTouchSize={thumbTouchSize}
        onSlidingComplete={handleTrackPositionChange}
        minimumTrackTintColor={COLOR.primary.lightGreen}
        maximumTrackTintColor={COLOR.background.textInput}
      />
      <Styled.TimerInfoWrapper>
        <Styled.TimeInfoText>{normalizePosition}</Styled.TimeInfoText>
        <Styled.TimeInfoText>{normalizeDuration}</Styled.TimeInfoText>
      </Styled.TimerInfoWrapper>
      <Styled.ButtonsWrapper>
        <Styled.Button onPress={onPressRewindBack} isRotate={true}>
          <Icon type="player_rewind" size={44} colorIcon="cloudyBlue" />
        </Styled.Button>
        <Styled.Button onPress={onPressPlayPause}>
          <Icon type={isPlaying ? 'player_expanded_pause' : 'player_expanded_play'} size={73} colorIcon="cloudyBlue" />
        </Styled.Button>
        <Styled.Button onPress={onPressRewindForward}>
          <Icon type="player_rewind" size={44} colorIcon="cloudyBlue" />
        </Styled.Button>
      </Styled.ButtonsWrapper>
    </Styled.Container>
  );
};
