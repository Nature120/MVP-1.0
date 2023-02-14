import styled from 'styled-components/native';

import { STATS_CANVAS_WIDTH } from './moods-summary.constants';

import { IStyledMark } from './atoms/moons-stats/moons-stats.typings';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledMoodSummary = {
  MoodSummary: styled.View`
    margin-top: 32px;
  `,

  Title: styled.Text`
    margin-top: 50px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    color: ${COLOR.font.darkBlue};
    margin-bottom: 8px;
  `,

  Subtitle: styled.Text`
    font-family: ${FONTS.family.mediumBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.subheading};
    margin-bottom: 24px;
  `,

  Week: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `,

  WeekRange: styled.Text`
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 18px;
    margin-top: 3px;
    color: ${COLOR.font.darkBlue};
  `,

  Wrapper: styled.View`
    flex-direction: row;
  `,

  Inner: styled.View`
    width: ${STATS_CANVAS_WIDTH}px;
  `,

  Designations: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  Designation: styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 25px;
  `,

  DesignationText: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16px;
    color: ${COLOR.font.cloudyBlue};
  `,

  Mark: styled.View<IStyledMark>`
    margin-left: 8px;
    width: 35px;
    height: 13px;
    border-radius: 3px;
    background-color: ${({ type }) => COLOR.moon[type]};
  `,
};
