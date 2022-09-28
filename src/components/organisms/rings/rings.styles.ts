import styled from 'styled-components/native';

import { RINGS_SIZE } from './rings.constants';

import { COLOR } from '@theme/colors';
import { Z_INDEX } from '@theme/z-index';

export const StyledRing = {
  Wrapper: styled.View`
    background-color: transparent;
    width: ${RINGS_SIZE}px;
    height: ${RINGS_SIZE}px;
  `,

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
