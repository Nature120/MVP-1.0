import React from 'react';

import { StyledProgressBar as Styled } from './progress-bar.styles';
import { IProgressBarProps } from './progress-bar.typings';

export const ProgressBar: React.FC<IProgressBarProps> = ({
  current,
  total,
}) => {
  const percent = (current * 100) / total;

  return (
    <Styled.ProgressBar>
      <Styled.Progress percent={percent} />
    </Styled.ProgressBar>
  );
};
