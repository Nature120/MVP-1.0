/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IGoalPickerProps {
  onGoalChange: (index: number) => void;
  renderItem: (item: any, index: number) => React.ReactNode;
  defaultIndex: number;
  data: string[] | number[];
}
