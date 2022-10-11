import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const SIZE = (DEVICE_WIDTH - 24 * 2) / 7 - 4;

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
    margin-left: 10px;
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

  Day: styled.View<{ isMatchDay: boolean; isCurrentDay: boolean }>`
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE / 2}px;
    align-items: center;
    justify-content: center;

    background-color: ${({ isMatchDay, isCurrentDay }) =>
      isMatchDay
        ? isCurrentDay
          ? COLOR.background.blueWeekDayCicrcle
          : COLOR.background.lightBlueWeekDayCircle
        : COLOR.background.grayWeekDayCircle};
  `,

  DayText: styled(Title)<{ isCurrentDay: boolean }>`
    margin-top: 2px;
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    color: ${({ isCurrentDay }) => (isCurrentDay ? COLOR.font.white : COLOR.font.darkBlue)};
  `,
};
