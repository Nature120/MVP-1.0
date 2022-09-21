import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

import { IStyledImageProps } from './image.typings';

export const ImageStyles = {
  Image: styled(FastImage)<IStyledImageProps>`
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    border-radius: ${({ borderRadius }) => borderRadius}px;
    ${({ styles }) => styles}
  `,
};
