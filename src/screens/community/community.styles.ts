import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledCommunity = {
  Container: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.Text`
    margin-bottom: 20px;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.xlLarge}px;
    font-weight: ${FONTS.weight.light};
    color: ${COLOR.subheading};
  `,
  Text: styled.Text`
    text-align: center;
    font-family: ${FONTS.family.regularBoreal};
    font-size: ${FONTS.size.medium}px;
    font-weight: ${FONTS.weight.light};
    color: ${COLOR.subheading};
  `,
};
