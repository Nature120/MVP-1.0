import styled from 'styled-components/native';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

const logoSize = 74;

export const StyledModalBottom = {
  ModalBottom: styled.View`
    background-color: ${COLOR.background.white};
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.25);
    border-radius: 18px;
    padding: 24px;
  `,

  Logo: styled.Image`
    background-color: ${COLOR.background.white};
    width: ${logoSize}px;
    height: ${logoSize}px;
    position: absolute;
    left: ${DEVICE_WIDTH / 2 - logoSize / 2}px;
    top: -${logoSize / 2 - 15}px;
    border-radius: ${logoSize}px;
  `,
};
