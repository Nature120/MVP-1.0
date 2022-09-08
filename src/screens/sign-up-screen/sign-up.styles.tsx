import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const AuthScreenStyles = {
  Container: styled.KeyboardAvoidingView`
    flex: 1;
  `,
  KeyboardAwareScrollView: styled(KeyboardAwareScrollView)`
    flex-grow: 1;
  `,
  BackButtonWrapper: styled.View`
    width: ${scale(32)}px;
    margin-top: ${moderateScale(50)}px;
    margin-bottom: ${moderateScale(18)}px;
  `,
  FormWrapper: styled.View`
    flex: 1;
    margin-bottom: ${moderateScale(16)}px;
  `,
  GoogleButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(8)}px;
  `,
  FaceBookButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(8)}px;
  `,
  AppleButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(24)}px;
  `,
  Title: styled.Text`
    margin-bottom: ${moderateScale(8)}px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${moderateScale(FONTS.size.xLarge)}px;
    font-weight: 600;
    line-height: ${moderateScale(36)}px;
    color: ${COLOR.font.darkBlue};
  `,
  Text: styled.Text`
    width: ${moderateScale(353)}px;
    margin-bottom: ${moderateScale(38)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(FONTS.size.xlSmall)}px;
    font-weight: ${FONTS.weight.light};
    line-height: ${moderateScale(19)}px;
    color: ${COLOR.font.darkBlue};
  `,
  LogInBtn: styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    width: ${scale(222)}px;
    margin-bottom: ${moderateScale(110, 0.1)}px;
    align-self: center;
  `,
  LoginText: styled.Text`
    margin-right: ${moderateScale(5)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(FONTS.size.xlSmall)}px;
    font-weight: ${FONTS.weight.light};
    line-height: ${moderateScale(19)}px;
    color: ${COLOR.font.darkBlue};
  `,
  LoginLabelText: styled.Text`
    font-family: ${FONTS.family.mediumAcumin};
    font-size: ${moderateScale(FONTS.size.xlSmall)}px;
    font-weight: ${FONTS.weight.medium};
    line-height: ${moderateScale(19)}px;
    color: ${COLOR.font.darkBlue};
  `,
};
