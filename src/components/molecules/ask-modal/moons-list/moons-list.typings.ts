import { TIconNames } from '@components/atoms/icon/icon.typings';

export interface IMoonsListProps {
  iconsSize: number;
  selectedIcon: string;
  onPressIcon: (type: TIconNames) => () => void;
}
