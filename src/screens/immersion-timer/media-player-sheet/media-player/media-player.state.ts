import { useEffect, useMemo, useState } from 'react';
import TrackPlayer, { Event, State, usePlaybackState, useTrackPlayerEvents } from 'react-native-track-player';

import { usePlayer } from '@screens/immersion-timer/immersion-timer.constants';

import { IAudioFile } from '@typings/common';

export const useMediaPlayerState = (audioFile: IAudioFile) => {
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState<number>(0);
  const [repeatCounter, setRepeatCounter] = useState<number>(1);
  const [repeatMode, setRepeatMode] = useState<boolean>(false);

  const { isPlayerReady } = usePlayer();
  const playerState = usePlaybackState();
  const { teacher, audioDuration } = audioFile as IAudioFile;

  useEffect(() => {
    if (!audioDuration) {
      return;
    }
    setDuration(audioDuration);
  }, []);

  const isPlaying = playerState === State.Playing;

  const events = [
    Event.PlaybackError,
    Event.PlaybackProgressUpdated,
    Event.PlaybackQueueEnded,
    Event.PlaybackProgressUpdated,
  ];

  useTrackPlayerEvents(events, event => {
    switch (event.type) {
      case Event.PlaybackError:
        console.warn('An error occured while playing the current track.');
        break;

      case Event.PlaybackQueueEnded:
        resetQueueOnEnd();
        break;
      case Event.PlaybackProgressUpdated:
        setPosition(event.position);
        break;
      default:
        break;
    }
  });

  const normalizeTime = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
  };

  const resetQueueOnEnd = async () => {
    if (repeatMode && repeatCounter < 2) {
      await TrackPlayer.seekTo(0);
      await TrackPlayer.play();
      setRepeatCounter(repeatCounter + 1);
      return;
    }

    await TrackPlayer.pause();
    await TrackPlayer.seekTo(0);
    repeatCounter !== 1 && setRepeatCounter(1);
  };

  const onPressPlayPause = async () => {
    isPlaying ? TrackPlayer.pause() : TrackPlayer.play();
  };

  const onPressRewindForward = async () => {
    await TrackPlayer.seekTo(position + 15);
  };

  const onPressRewindBack = async () => {
    await TrackPlayer.seekTo(position - 15);
  };

  const onPressRepeat = async () => {
    setRepeatMode(!repeatMode);
  };

  const normalizePosition = useMemo(() => normalizeTime(position), [position]);

  const normalizeDuration = useMemo(() => normalizeTime(duration), [duration]);

  return {
    duration,
    position,
    isPlayerReady,
    teacher,
    normalizePosition,
    normalizeDuration,
    onPressPlayPause,
    onPressRewindForward,
    onPressRewindBack,
    isPlaying,
    onPressRepeat,
    repeatMode,
  };
};
