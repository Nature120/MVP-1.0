import TrackPlayer, { Event, State } from 'react-native-track-player';

let wasPausedByDuck = false;

export const PlaybackService = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemoteSeek, async ({ position }) => await TrackPlayer.seekTo(position));

  TrackPlayer.addEventListener(Event.RemoteJumpForward, async event => {
    const position = (await TrackPlayer.getPosition()) + event.interval;
    TrackPlayer.seekTo(position);
  });

  TrackPlayer.addEventListener(Event.RemoteJumpBackward, async event => {
    const position = (await TrackPlayer.getPosition()) - event.interval;
    TrackPlayer.seekTo(position);
  });

  TrackPlayer.addEventListener(Event.RemoteDuck, async ({ permanent, paused }) => {
    if (permanent) {
      TrackPlayer.pause();
      return;
    }
    if (paused) {
      const playerState = await TrackPlayer.getState();
      wasPausedByDuck = playerState !== State.Paused;
      TrackPlayer.pause();
    } else {
      if (wasPausedByDuck) {
        TrackPlayer.play();
        wasPausedByDuck = false;
      }
    }
  });
};
