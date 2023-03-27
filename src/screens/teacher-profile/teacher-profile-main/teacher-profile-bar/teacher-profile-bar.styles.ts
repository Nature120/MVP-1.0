import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const TeacherProfileBarStyled = {
  Container: styled.View`
    padding: 0px 25px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: ${COLOR.background.textInput};
    border-bottom-style: solid;
  `,
  Button: styled.TouchableOpacity`
    margin-right: 30px;
    padding-bottom: 7px;
    justify-content: center;
    align-items: center;
  `,
  UnderLine: styled.View`
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    border-radius: 5px;
    background-color: ${COLOR.primary.green};
  `,
  ButtonText: styled.Text<{ isActive: boolean }>`
    font-family: ${FONTS.family.semiBoldAcumin};
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 20.4px;
    color: ${({ isActive }) => (isActive ? COLOR.primary.darkBlue : COLOR.font.cloudyBlue)};
  `,
};
