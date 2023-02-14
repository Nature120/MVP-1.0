import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledDynamicHeader = {
  DynamicHeader: styled(TextComponent)`
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    font-family: ${FONTS.family.mediumBoreal};
    color: ${COLOR.subheading};
    margin-bottom: 16px;
    max-width: 70%;
  `,
};
