export interface ISpacerProps extends ISpacerControlProps {
  isHorizontal?: boolean;
  isEqual?: boolean;
}

export interface ISpacerControlProps {
  gap?: number;
  isLastItem?: boolean;
  index?: number;
  startEndGap?: number;
}
