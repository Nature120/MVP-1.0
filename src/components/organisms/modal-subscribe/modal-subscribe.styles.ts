import { moderateVerticalScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const ModalSubscribeStyles = {
  Container: styled.View`
    flex: 1;
    background-color: white;
  `,
  HeaderWrapper: styled.View`
    height: 35%;
    padding: 24px;
    background-color: green;
    justify-content: flex-end;
  `,
  WrapperSVG: styled.View`
    position: absolute;
    right: 25px;
    top: ${moderateVerticalScale(50)}px;
  `,
  TitleText: styled.Text`
    align-self: center;
    font-family: ${FONTS.family.boldAcumin};
    font-size: ${FONTS.size.xLarge}px;
    font-weight: ${FONTS.weight.medium};
    color: ${COLOR.primary};
  `,
  MainContainer: styled.View`
    flex: 1;
    margin-horizontal: 25px;
  `,
  SubscribeWrapper: styled.View`
    flex: 1;
    padding-top: 50px;
    margin-bottom: 20px;
    flex-direction: row;
    justify-content: center;
  `,
  SubscribeBox: styled.View<{ marginRight?: number }>`
    width: 160px;
    height: 200px;
    padding: 10px;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : 0)}px;
    border-color: green;
    border-width: 1px;
  `,
  SubscribeTitle: styled.Text`
    margin-bottom: 5px;
  `,
  SubscribePrice: styled.Text`
    margin-bottom: 5px;
  `,
  SubscribeText: styled.Text``,
  SubBtn: css`
    margin-top: 20px;
    border-radius: 10px;
  `,
  BottomGroupWrapper: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  BottomBtn: styled.TouchableOpacity``,
  BottomBtnText: styled.Text`
    text-decoration-line: underline;
  `,
};
