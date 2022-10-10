import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { TViewProps } from '@typings/common';

export const linerarGradient: TViewProps = {
  ...StyleSheet.absoluteFillObject,
};

export const StyledGoalPicker = {
  GoalPicker: styled.View`
    margin-top: 24px;
    margin-bottom: 44px;
  `,
};
