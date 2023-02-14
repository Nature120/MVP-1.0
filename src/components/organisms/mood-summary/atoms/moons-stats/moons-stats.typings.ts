import { IMoonStat } from '../../mood-summary.typings';

export interface IMoonsStatsProps {
  moons?: IMoonStat[];
}

export interface IStyledMark {
  assessment?: number;
  type: 'before' | 'after';
}
