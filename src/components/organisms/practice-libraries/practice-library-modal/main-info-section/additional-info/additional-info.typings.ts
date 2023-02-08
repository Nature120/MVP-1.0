import { IPracticeLibrary } from '@typings/common';

export interface IProp {
  practice: TPractice;
  isAudioFile: boolean;
}

type TPractice = Pick<IPracticeLibrary, 'season' | 'indoorOutdoor'>;
