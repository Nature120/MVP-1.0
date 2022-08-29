import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${FONTS.family.semiBoldAcumin};
  font-weight: ${FONTS.weight.semiBold};
  font-size: ${FONTS.size.xLarge};
  line-height: 36px;
  color: ${COLOR.title};
`;
