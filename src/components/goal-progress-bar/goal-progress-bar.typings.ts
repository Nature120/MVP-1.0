export interface IGoalProgressBarProps extends IUseGoalProgressBarProps {
  textColor?: string;
  rotation?: number;
  color?: string;
  strokeWidth?: number;
}

export interface IUseGoalProgressBarProps {
  addedTime?: number;
  minutes: number;
  maxMinutes: number;
  size?: number;
  duration?: number;
}
