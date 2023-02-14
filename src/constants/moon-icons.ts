import { TIconNames } from '@components/atoms/icon/icon.typings';

interface IMoonIcon {
  name: TIconNames;
  description: string;
}

export const MOON_ICONS: Array<IMoonIcon> = [
  { name: 'newMoon', description: 'Awful' },
  { name: 'waxingGibbosMoon', description: 'Bad' },
  { name: 'halfMoon', description: 'Okay' },
  { name: 'waningGibbosMoon', description: 'Good' },
  { name: 'fullMoon', description: 'Great' },
];
