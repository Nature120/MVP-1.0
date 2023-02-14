import styled, { css } from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component/text-component';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

export const StyledBottomTabBar = {
  Wrapper: styled.View`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 15px 24px ${isIOS ? 0 : 15}px 24px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    background-color: ${COLOR.background.white};
    width: 100%;

    ${!isIOS &&
    css`
      shadow-color: ${COLOR.shadow.black};
      shadow-offset: {width: 0, height: 13};
      shadow-opacity: 0.24;
      shadow-radius: 14.86px;
    `}
  `,

  BottomTabBar: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;
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
