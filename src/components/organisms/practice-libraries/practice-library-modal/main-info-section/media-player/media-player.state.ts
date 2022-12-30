import TrackPlayer, {
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import { usePlayer } from '@screens/immersion-timer';

import { IAudioFile } from '@typings/common';

export const useMediaPlayerState = (audioFile: IAudioFile | undefined) => {
  const { isPlayerReady } = usePlayer();

  const { author, avatar } = audioFile as IAudioFile;
  const playerState = usePlaybackState();
  const isPlaying = playerState === State.Playing;

  const { position, duration } = useProgress();

  const events = [Event.PlaybackError, Event.PlaybackProgressUpdated];

  useTrackPlayerEvents(events, event => {
    switch (event.type) {
      case Event.PlaybackError:
        console.warn('An error occured while playing the current track.');
        break;

      case Event.PlaybackProgressUpdated:
        const normilizeEventDuration = normalizeTime(event.duration);
        const normilizeEventPosition = normalizeTime(event.position);
        if (normilizeEventDuration === normilizeEventPosition) {
          resetQueueOnEnd();
        }
        break;

      default:
        break;
    }
  });

  const normalizeTime = (seconds: number) => {
    return new Date(seconds * 1000).toISOString().slice(14, 19);
  };

  const resetQueueOnEnd = async () => {
    await TrackPlayer.pause();
    await TrackPlayer.seekTo(0);
  };

  const onPressPlay = async () => {
    await TrackPlayer.play();
  };

  const onPressPause = async () => {
    isPlaying && (await TrackPlayer.pause());
  };

  const onPressStop = async () => {
    isPlaying && (await TrackPlayer.pause());
    await TrackPlayer.seekTo(0);
  };

  const onPressRewindForward = async () => {
    await TrackPlayer.seekTo(position + 15);
  };

  const onPressRewindBack = async () => {
    await TrackPlayer.seekTo(position - 15);
  };

  const normalizePosition = normalizeTime(position);
  const normalizeDuration = normalizeTime(duration);

  return {
    duration,
    position,
    isPlayerReady,
    author,
    avatar,
    normalizePosition,
    normalizeDuration,
    onPressPlay,
    onPressPause,
    onPressStop,
    onPressRewindForward,
    onPressRewindBack,
  };
};
