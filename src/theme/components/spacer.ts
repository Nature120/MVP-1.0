import styled, { css } from 'styled-components/native';

interface Props {
  gap?: number;
  isLastItem?: boolean;
  isHorizontal?: boolean;

  isEqual?: boolean;
  index?: number;
  startEndGap?: number;
}

const getStartGap = (props: Props) => {
  return props.index === 0 ? props.startEndGap || props.gap : (props.gap || 0) / 2;
};

const getEndGap = (props: Props) => {
  return props.isLastItem ? props.startEndGap || props.gap : (props.gap || 0) / 2;
};

const getMiddleGap = (props: Props) => {
  return props.isLastItem ? 0 : props.gap || 0;
};

const equalHorizontal = (props: Props) => css`
  margin-left: ${getStartGap(props)}px;
  margin-right: ${getEndGap(props)}px;
`;

const equalVertical = (props: Props) => css`
  margin-top: ${getStartGap(props)}px;
  margin-bottom: ${getEndGap(props)}px;
`;

const horizontal = (props: Props) => css`
  margin-right: ${getMiddleGap(props)}px;
`;

const vertical = (props: Props) => css`
  margin-bottom: ${getMiddleGap(props)}px;
`;

export const Sapcer = styled.View<Props>`
  ${props =>
    props.isHorizontal
      ? props.isEqual
        ? equalHorizontal(props)
        : horizontal(props)
      : props.isEqual
      ? equalVertical(props)
      : vertical(props)}
`;
