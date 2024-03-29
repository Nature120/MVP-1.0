import { Animated, TextInput } from 'react-native';
import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { RINGS_SIZE } from '../rings.constants';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const StyledGoalText = {
  AnimatedTextInput: styled(AnimatedTextInput)<{ textColor: string; minutesLength: number }>`
    color: ${props => props.textColor};
    padding-top: ${isIOS ? 70 : 100}px;
    text-align: center;
    font-family: ${FONTS.family.boldAcumin};
    font-weight: ${FONTS.weight.bold};
    font-size: ${({ minutesLength }) =>
      RINGS_SIZE / (minutesLength * 1.5) > 64 ? 64 : RINGS_SIZE / (minutesLength * 1.5)}px;
  `,

  Min: styled.Text<{ textColor: string }>`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: 28px;
    color: ${props => props.textColor};
  `,

  WeeklyGoal: styled.Text<{ isAddedTime?: boolean }>`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    line-height: ${({ isAddedTime }) => (isAddedTime ? 31 : 21)}px;
    text-align: center;
    color: ${COLOR.subheading};
  `,
};
