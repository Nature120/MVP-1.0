import styled, { css } from 'styled-components/native';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { TextComponent, Title } from '@theme/components';
import { FONTS } from '@theme/fonts';

const SIZE = (DEVICE_WIDTH - 24 * 2) / 7 - 4;

interface IDayProps {
  isToday: boolean;
  isCompleted?: boolean;
}

export const StyledImmersionsDaily = {
  ImmersionsDaily: styled.View`
    margin-bottom: 56px;
  `,

  Header: styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 32px;
  `,

  Title: styled(TextComponent)`
    margin-left: 16px;
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.subheading};
  `,

  Immersions: styled.Text`
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.primary.green};
  `,

  CompletedImmersions: styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;
  `,

  Day: styled.View<IDayProps>`
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
    align-items: center;
    justify-content: center;

    background-color: #e9eaec;

    ${({ isCompleted }) =>
      isCompleted &&
      css`
        background-color: ${COLOR.primary.violet};
      `}

    ${({ isToday }) =>
      isToday &&
      css`
        background-color: ${COLOR.primary.blue};
      `}
  `,

  DayText: styled(Title)<IDayProps>`
    margin-top: 2px;
    font-weight: ${({ isToday }) => (isToday ? FONTS.weight.bold : FONTS.weight.medium)};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    color: ${({ isToday }) => (isToday ? COLOR.font.white : COLOR.font.darkBlue)};
  `,
};
