import styled from 'styled-components/native';

import { DAYS_WIDTH, ITEM_HEIGHT, MARGIN_BOTTOM } from '../../moods-summary.constants';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledDays = {
  Days: styled.View`
    width: ${DAYS_WIDTH}px;
  `,

  Day: styled.Text<{ isLastDay: boolean }>`
    margin-bottom: ${({ isLastDay }) => (isLastDay ? 0 : MARGIN_BOTTOM)}px;
    height: ${ITEM_HEIGHT}px;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.mediumSmall}px;
    line-height: 16px;
    color: ${COLOR.subheading};
  `,
};
