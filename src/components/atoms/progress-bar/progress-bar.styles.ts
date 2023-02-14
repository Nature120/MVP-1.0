import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const StyledProgressBar = {
  ProgressBar: styled.View`
    position: relative;
    width: 100%;
    background: ${COLOR.primary.milk};
    border-radius: 5px;
    height: 10px;
  `,

  Progress: styled.View<{ percent: number }>`
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.percent}%;
    background: ${COLOR.primary.darkBlue};
    border-radius: 5px;
    ${props =>
      props.percent !== 100 &&
      css`
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `}
    height: 10px;
  `,
};
