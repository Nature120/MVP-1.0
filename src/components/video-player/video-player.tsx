import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

import { Icon } from '../atoms/icon';
import { IVideoPlayerProps } from './video-player.types';

import { StyledVideoPlayer as Styled } from './video-player.styles';

export const VideoPlayer: React.FC<IVideoPlayerProps> = props => {
  const { videoSource } = props;
  const videoRef = useRef<Video>(null);
  const [isPlaying, setPlaying] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const progress = Math.round((currentTime / duration) * 100);

  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const onFullScreen = () => videoRef.current?.presentFullscreenPlayer();

  const onProgress = (data: { currentTime: number; playableDuration: number; seekableDuration: number }) => {
    setCurrentTime(data.currentTime);
  };
  const onSkipBackward = () => {
    videoRef.current?.seek(currentTime - 10);
  };

  const onSkipForward = () => {
    videoRef.current?.seek(currentTime + 10);
  };

  return (
    <Styled.VideoPlayer>
      <Styled.Container>
        <Video
          ref={videoRef}
          paused={!isPlaying}
          source={{ uri: videoSource }}
          style={{ height: 300, width: 400 }}
          muted={false}
          ignoreSilentSwitch={'ignore'}
          onProgress={onProgress}
          playInBackground={false}
          controls={false}
          fullscreenAutorotate={true}
          onLoad={data => setDuration(data.duration)}
          resizeMode={'contain'}
        />
      </Styled.Container>
      <Styled.FullScreenButton onPress={onFullScreen} activeOpacity={0.7}>
        <Icon type={'full_screen'} size={25} />
      </Styled.FullScreenButton>
      <Styled.ProgressWrapperContainer>
        <Styled.ProgressWrapper>
          <Styled.Progress width={progress} />
        </Styled.ProgressWrapper>
      </Styled.ProgressWrapperContainer>
      <Styled.ControlsWrapper>
        <TouchableOpacity onPress={onSkipBackward} activeOpacity={0.9} style={{ transform: [{ rotate: '180deg' }] }}>
          <Icon type={'player_rewind'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlayPause} activeOpacity={0.9}>
          <Icon type={isPlaying ? 'player_expanded_pause' : 'player_expanded_play'} size={50} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSkipForward} activeOpacity={0.9}>
          <Icon type={'player_rewind'} size={40} />
        </TouchableOpacity>
      </Styled.ControlsWrapper>
    </Styled.VideoPlayer>
  );
};
