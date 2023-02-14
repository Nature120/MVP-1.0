import styled from 'styled-components/native';

import { PAGE_PADDING } from '@screens/home/home.styles';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { Z_INDEX } from '@theme/z-index';

const logoSize = 170;

export const StyledPractices = {
  Practices: styled.SafeAreaView`
    margin-vertical: 30px;
    flex: 1;
  `,

  BackButtonWrapper: styled.View`
    margin: 24px 0 0 24px;
  `,

  LayoutContent: styled.SafeAreaView`
    flex: 1;
    background-color: ${COLOR.background.white};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  Space: styled.View`
    margin-bottom: ${isIOS ? 36 + PAGE_PADDING : 51 + PAGE_PADDING}px;
  `,

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
