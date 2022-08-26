import { ISlide } from '@components/slider/slider.typings';
import { IMAGES } from './images';

export const sliderContent: ISlide[] = [
  {
    isWithClouds: false,
    image: 'lotus',
    title: '[Personalized] nature therapy practices, backed by [science]',
    description:
      'Choose from a library of mindfulness activities designed by ecopsychology experts and curated by leaders in the field',
  },
  {
    isWithClouds: true,
    image: 'flowers',
    title: 'Turn time spent in nature into moments of [wonder] & [healing]',
    description:
      'Spending at least 120 minutes per week in nature has been scientifally proven to improve mental and pysical health over time',
  },
  {
    isWithClouds: false,
    image: 'tip',
    title: 'Your journey to [better wellbeing]',
    description:
      'Set a weekly goal that fits your schedule, record your mood before and after spending time outside, and track your progress over time',
  },
];
