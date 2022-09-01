export interface ITimePickerProps {
  period: TPeriod;
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export type TPeriod = 'in_the_morning' | 'at_lunch' | 'after_work';
