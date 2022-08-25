export interface ISliderProps {
  content: ISlide[];
}

export interface ISlide {
  title: string;
  description: string;
  list?: string[];
}
