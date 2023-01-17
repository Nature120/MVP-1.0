import { IAudioFile, IPracticeLibrary } from '@typings/common';

export interface IProp {
  audioFile?: IAudioFile;
  isCollapsed: boolean;
  practiceInfo: IPracticeLibrary;
}

export interface IPropInfo {
  audioInfo: IAudioInfo;
  practiceInfo: IPracticeLibrary;
}

interface IAudioInfo {
  duration: number;
  position: number;
  author: string;
  avatar: string;
  normalizePosition: string;
  normalizeDuration: string;
  onPressPlayPause: () => Promise<void>;
  onPressStop: () => Promise<void>;
  onPressRewindForward: () => Promise<void>;
  onPressRewindBack: () => Promise<void>;
  onPressRepeat: () => Promise<void>;
  repeatMode: boolean;
  isPlaying: boolean;
}
