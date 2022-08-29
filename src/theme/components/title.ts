import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const Title = styled.Text`
  font-family: ${FONTS.family.semiBoldAcumin};
  font-weight: ${FONTS.weight.semiBold};
  font-size: ${FONTS.size.xLarge}px;
  line-height: 36px;
  color: ${COLOR.title};
`;
