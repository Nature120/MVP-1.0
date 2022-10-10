export interface IGoalPickerProps {
  onGoalChange: (index: number) => void;
  defaultIndex: number;
  data: string[];
}
