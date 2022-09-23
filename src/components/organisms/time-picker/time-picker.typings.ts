export interface ITimePickerProps {
  period: TPeriod;
  time: Date;
  setTime: React.Dispatch<React.SetStateAction<Date | undefined>>;
}

export type TPeriod = 'IN THE MORNING' | 'AT LUNCH' | 'AFTER WORK';
