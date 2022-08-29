import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const getCheckedColor = (isChecked: boolean) => (isChecked ? COLOR.background.beigeLight : COLOR.primary.blue);

export const StyledWeeklyGoalCheckbox = {
  WeeklyGoalCheckbox: styled.View<{ isChecked: boolean }>`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 7px 24px;
  `,

  MinutesPerDay: styled.View`
    align-items: center;
    justify-content: center;
  `,

  Minutes: styled.Text<{ isChecked: boolean }>`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: 64px;
    line-height: 77px;
    color: ${props => getCheckedColor(props.isChecked)};
  `,

  MinDay: styled.Text<{ isChecked: boolean }>`
    margin-top: -11px;
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 20px;
    color: ${props => getCheckedColor(props.isChecked)};
  `,

  VerticalLine: styled.View<{ isChecked: boolean }>`
    width: 1px;
    align-self: stretch;
    background: ${props => getCheckedColor(props.isChecked)};
    margin-horizontal: 25px;
  `,

  Text: styled.Text<{ isChecked: boolean }>`
    font-family: ${FONTS.family.mediumAcumin};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 20px;
    letter-spacing: 3px;
    max-width: 181px;
    color: ${props => getCheckedColor(props.isChecked)};
  `,
};
