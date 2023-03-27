import { moderateVerticalScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

export const LayoutWithGrayGreenGradientStyled = {
  ImageBackground: styled.ImageBackground`
    flex: 1;
  `,
  Image: styled.Image`
    position: absolute;
    width: 100%;
    height: ${moderateVerticalScale(820)}px;
    top: 0px;
    right: 0px;
  `,
  Wrapper: styled.View`
    margin-top: ${isIOS ? scale(52) : scale(40)}px;
    flex: 1;
  `,
};
