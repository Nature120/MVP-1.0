import styled from 'styled-components/native';

import { RINGS_SIZE } from './rings.constants';

import { COLOR } from '@theme/colors';

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
    z-index: -1;
  `,

  Foreground: styled.View<{ fgRadius: number }>`
    background-color: ${COLOR.background.extraLightMint};
    border-radius: ${props => props.fgRadius}px;
    width: ${props => props.fgRadius * 2}px;
    height: ${props => props.fgRadius * 2}px;
  `,
};
