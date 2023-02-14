import { moderateScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { isIOS } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';

const backgroundBtn = `width: 36px;
    height: 36px;
    width:36px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: ${COLOR.background.white};`;

export const TeacherProfileHeaderStyled = {
  Container: styled.View`
    flex-direction: row;
    margin-horizontal: 24px;
    margin-top: ${isIOS ? moderateScale(0) : moderateScale(10)}px;
    margin-bottom: ${moderateScale(95)}px;
    justify-content: space-between;
    align-items: center;
  `,
  ArrowLeftBtn: css`
    ${backgroundBtn}
  `,
  UpdateBtn: styled.TouchableOpacity`
    ${backgroundBtn}
  `,
};
