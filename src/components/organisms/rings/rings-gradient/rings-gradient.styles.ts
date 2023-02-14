import MaskedView from '@react-native-masked-view/masked-view';
import styled from 'styled-components/native';

import { TStyles } from '@typings/common';

export const maskStyle: TStyles = {
  backgroundColor: 'transparent',
};

export const StyledRingsGradient = {
  Wrapper: styled.View<{ size: number; startColor: string }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.startColor};
    border-radius: ${props => props.size / 2}px;
  `,

  MaskedView: styled(MaskedView)`
    flex: 1;
  `,

  Inner: styled.View<{ size: number; endColor: string }>`
    flex: 1;
    background-color: ${props => props.endColor};
    border-radius: ${props => props.size / 2}px;
  `,
};
