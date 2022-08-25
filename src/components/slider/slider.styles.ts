import { Icon } from '@components/icon';
import { Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

const borderRadius = 5;
const spaceBetweenDots = 12.87;
const widthWithSpace = width - 24 * 2;
const dotHeight = 9.6;
const activeDotColor = '#00622D';
const dotColor = '#cfdfd6';

export const nextButtonStyles = `
  position: absolute;
  right: 14px;
  bottom: 0;
`;

const getDotWidth = (total: number) =>
  widthWithSpace / total - spaceBetweenDots;

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
    border-bottom-left-radius: ${props =>
      props.dotIndex === 0 ? borderRadius : 0}px;
    border-bottom-right-radius: ${props =>
      props.dotIndex === props.totalSlides - 1 ? borderRadius : 0}px;
    border-top-left-radius: ${props =>
      props.dotIndex === 0 ? borderRadius : 0}px;
    border-top-right-radius: ${props =>
      props.dotIndex === props.totalSlides - 1 ? borderRadius : 0}px;
    background-color: ${props => (props.isActive ? activeDotColor : dotColor)};
    border-radius: ${borderRadius}px;
    width: ${props => getDotWidth(props.totalSlides)}px;
    height: ${dotHeight}px;
    margin-vertical: 3px;
  `,
  DotsWrapper: styled.View`
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    flex-direction: row;
    flex: 1;
    margin-horizontal: 24px;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
  `,
};
