import React from 'react';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';
import { useMediaPlayerState } from './media-player.state';

import { IAudioFile } from '@typings/common';

import { MediaPlayerStyled as Styled } from './media-player.styles';

import { COLOR } from '@theme/colors';

interface IProp {
  audioFile?: IAudioFile;
}

export const MediaPlayer: React.FC<IProp> = ({ audioFile }) => {
  const {
    isPlayerReady,
    duration,
    position,
    author,
    avatar,
    normalizePosition,
    normalizeDuration,
    onPressRewindBack,
    onPressPlay,
    onPressRewindForward,
    onPressPause,
    onPressStop,
  } = useMediaPlayerState(audioFile);

  if (!isPlayerReady) {
    return (
      <Styled.Container>
        <Styled.AuthorText>Please wait, we loading the audio track...</Styled.AuthorText>
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      {duration !== 0 && (
        <>
          <Styled.WrapperAuthorInfo>
            <Styled.AuthorText>Narrated by {author}</Styled.AuthorText>
            <Image source={{ uri: avatar }} height={70} width={70} borderRadius={30} />
          </Styled.WrapperAuthorInfo>
          <Styled.CurrentAudioTimerText>{normalizePosition}</Styled.CurrentAudioTimerText>
          <Slider
            step={1}
            value={position}
            minimumValue={0}
            maximumValue={duration}
            onSlidingComplete={async value => await TrackPlayer.seekTo(value)}
            tapToSeek={true}
            style={Styled.Slider as any}
            minimumTrackTintColor={COLOR.background.mintDark}
            maximumTrackTintColor={COLOR.background.dark}
          />

          <Styled.TimerInfoWrapper>
            <Styled.TimeInfoText>0:00</Styled.TimeInfoText>
            <Styled.TimeInfoText>{normalizeDuration}</Styled.TimeInfoText>
          </Styled.TimerInfoWrapper>
          <Styled.ButtonsWrapper>
            <Styled.Button onPress={onPressRewindBack}>
              <Icon type="rewind_player" size={50} colorIcon="cloudyBlue" />
            </Styled.Button>
            <Styled.Button onPress={onPressPlay}>
              <Icon type="play_player" size={50} colorIcon="cloudyBlue" />
            </Styled.Button>
            <Styled.Button onPress={onPressRewindForward} isRotate={true}>
              <Icon type="rewind_player" size={50} colorIcon="cloudyBlue" />
            </Styled.Button>
            <Styled.Button onPress={onPressPause}>
              <Icon type="pause_player" size={55} colorIcon="cloudyBlue" />
            </Styled.Button>
            <Styled.Button onPress={onPressStop}>
              <Icon type="stop_player" size={50} colorIcon="cloudyBlue" />
            </Styled.Button>
          </Styled.ButtonsWrapper>
        </>
      )}
    </Styled.Container>
  );
};
