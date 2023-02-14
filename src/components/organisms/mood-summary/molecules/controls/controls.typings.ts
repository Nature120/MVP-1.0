import { TIconNames } from '@components/atoms/icon/icon.typings';

export interface IControlsProps {
  getPrevWeek: () => void;
  getNextWeek: () => void;
  currentPage: number;
}

export interface IControlButton {
  type: TIconNames;
  isDisabled: boolean;
  onPress: () => void;
}
