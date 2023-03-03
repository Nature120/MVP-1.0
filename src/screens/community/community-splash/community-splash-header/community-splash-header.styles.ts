import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

export const CommunitySplashHeaderStyled = {
  Container: styled.View`
    height: ${verticalScale(180)}px;
  `,
  Image: styled.Image`
    position: absolute;
    width: 100%;
  `,
  CloseBtn: styled.TouchableOpacity`
    width: ${moderateScale(36)}px;
    height: ${moderateScale(36)}px;
    margin-top: ${isIOS ? verticalScale(45) : verticalScale(25)}px;
    margin-right: 25px;
    align-self: flex-end;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.8);
  `,
};
