import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { Z_INDEX } from '@theme/z-index';

const logoSize = 170;

export const LoaderStyles = {
  Loader: styled.View`
    z-index: ${Z_INDEX.alwaysTop};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLOR.background.white};
  `,
  Logo: styled.Image`
    width: ${logoSize}px;
    height: ${logoSize}px;
  `,
};
