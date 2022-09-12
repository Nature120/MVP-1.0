import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { TextComponent } from '@theme/components/text';

export const StyledBottomTabBar = {
  Wrapper: styled.View`
    padding: 15px 24px ${isIOS ? 0 : 15}px 24px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    background-color: ${COLOR.background.white};
  `,

  BottomTabBar: styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,

  BarButton: styled.TouchableOpacity`
    align-items: center;
    justify-content: space-between;
  `,

  Text: styled(TextComponent)`
    color: ${COLOR.subheading};
    font-size: 10px;
    line-height: 12px;
  `,
};
