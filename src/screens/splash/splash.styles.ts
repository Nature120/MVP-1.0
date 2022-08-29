import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledSplash = {
  SliderContainer: styled.View`
    flex: 1;
  `,

  Ellipses: styled.Image`
    position: absolute;
    width: 100%;
    height: 423;
    bottom: 0;
    z-index: -1;
  `,
};
