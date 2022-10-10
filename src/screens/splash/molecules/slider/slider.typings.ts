import { TImageNames } from '@constants/images';

export interface ISliderProps {
  content: ISlide[];
}

export interface ISlide {
  title: string;
  description: string;
  image: TImageNames;
}
