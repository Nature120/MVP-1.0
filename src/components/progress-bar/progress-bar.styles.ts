import styled, { css } from 'styled-components/native';

export const StyledProgressBar = {
  ProgressBar: styled.View`
    position: relative;
    width: 100%;
    background: #fcfcfc;
    border-radius: 5px;
    height: 10px;
  `,

  Progress: styled.View<{ percent: number }>`
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.percent}%;
    background: #163045;
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
