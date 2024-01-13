import styled from 'styled-components/native';

import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../services/helpers/device-utils';

export const StyledWelcomeVideo = {
  WelcomeVideo: styled.View`
    flex: 1;
    background-color: #000;
  `,
  ButtonWrapper: styled.TouchableOpacity`
    background-color: #000;
    padding: 8px;
    border-radius: 10px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 100;
    top: 20px;
    left: 40px;
  `,
  LoaderWrapper: styled.View`
    position: absolute;
    width: ${DEVICE_WIDTH}px;
    height: ${DEVICE_HEIGHT}px;
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Text: styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: #fff;
  `,
};
