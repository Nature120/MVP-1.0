import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player';

export const SetupPlayerService = async () => {
  let isSetup = false;

  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.updateOptions({
      android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
      },
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.JumpBackward,
        Capability.JumpForward,
        Capability.SeekTo,
      ],
      progressUpdateEventInterval: 1,
    });
    isSetup = true;
  } finally {
    return isSetup;
  }
};
