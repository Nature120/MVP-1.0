import styled from 'styled-components/native';

import { Z_INDEX } from '@theme/z-index';

export const StyledSplash = {
  SliderContainer: styled.View`
    flex: 1;
  `,

  Ellipses: styled.Image`
    position: absolute;
    width: 100%;
    height: 423px;
    bottom: -40px;
    z-index: ${Z_INDEX.hidden};
  `,
};
