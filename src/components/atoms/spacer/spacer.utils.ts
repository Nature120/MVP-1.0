import { css } from 'styled-components/native';

import { ISpacerControlProps } from './spacer.typings';

const getStartGap = (props: ISpacerControlProps) => {
  return props.index === 0 ? props.startEndGap || props.gap : (props.gap || 0) / 2;
};

const getEndGap = (props: ISpacerControlProps) => {
  return props.isLastItem ? props.startEndGap || props.gap : (props.gap || 0) / 2;
};

const getMiddleGap = (props: ISpacerControlProps) => {
  return props.isLastItem ? 0 : props.gap || 0;
};

export const equalHorizontal = (props: ISpacerControlProps) => css`
  margin-left: ${getStartGap(props)}px;
  margin-right: ${getEndGap(props)}px;
`;

export const equalVertical = (props: ISpacerControlProps) => css`
  margin-top: ${getStartGap(props)}px;
  margin-bottom: ${getEndGap(props)}px;
`;

export const horizontal = (props: ISpacerControlProps) => css`
  margin-right: ${getMiddleGap(props)}px;
`;

export const vertical = (props: ISpacerControlProps) => css`
  margin-bottom: ${getMiddleGap(props)}px;
`;
