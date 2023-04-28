import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { Z_INDEX } from '@theme/z-index';

export const StyledCircle = {
  Overlay: styled.View`
    justify-content: center;
    align-items: center;
    transform: rotate(-90deg);
    z-index: ${Z_INDEX.hidden};
  `,

  Foreground: styled.View<{ fgRadius: number }>`
    background-color: ${COLOR.background.extraLightMint};
    border-radius: ${props => props.fgRadius}px;
    width: ${props => props.fgRadius * 2}px;
    height: ${props => props.fgRadius * 2}px;
  `,
};
