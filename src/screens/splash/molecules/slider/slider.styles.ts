import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

const borderRadius = 5;
const dotSize = 10;
const activeDotColor = COLOR.primary.darkBlue;
const dotColor = '#BCC1C6';

export const nextButtonStyles = `
  position: absolute;
  right: 14px;
  bottom: 0;
`;

export const StyledSlider = {
  Slider: styled.SafeAreaView`
    min-height: 200px;
    height: 100%;
  `,

  Dot: styled.View<{
    dotIndex: number;
    totalSlides: number;
    isActive?: boolean;
  }>`
    background-color: ${props => (props.isActive ? activeDotColor : dotColor)};
    border-radius: ${borderRadius}px;
    width: ${dotSize}px;
    height: ${dotSize}px;
    margin-vertical: 3px;
    margin-horizontal: 4px;
  `,

  DotsWrapper: styled.View`
    position: absolute;
    bottom: 48px;
    left: 0;
    right: 0;
    flex-direction: row;
    flex: 1;
    margin-horizontal: 24px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  `,
};
