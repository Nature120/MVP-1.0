import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, scale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SignInScreenStyles = {
  Container: styled.KeyboardAvoidingView`
    flex: 1;
  `,
  KeyboardAwareScrollView: styled(KeyboardAwareScrollView)`
    flex-grow: 1;
  `,
  Wrapper: styled.View`
    flex: 1;
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
  LogInWrapper: styled.View`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;
  `,
  LogInBtn: styled.TouchableOpacity`
    width: ${scale(60)}px;
  `,
  LoginText: styled.Text`
    margin-right: ${moderateScale(5)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(FONTS.size.xlSmall)}px;
    font-weight: ${FONTS.weight.light};
    line-height: ${moderateScale(19)}px;
    color: ${COLOR.font.darkBlue};
  `,
  Title: styled.Text`
    margin-bottom: ${moderateScale(8)}px;
    font-family: ${FONTS.family.semiBoldAcumin};
    font-size: ${moderateScale(FONTS.size.xLarge)}px;
    font-weight: ${FONTS.weight.semiBold};
    line-height: ${moderateScale(36)}px;
    color: ${COLOR.font.darkBlue};
  `,
  Text: styled.Text`
    margin-bottom: ${moderateScale(28)}px;
    font-family: ${FONTS.family.lightBoreal};
    font-size: ${moderateScale(FONTS.size.xSmall)}px;
    font-weight: ${FONTS.weight.light};
    line-height: ${moderateScale(19)}px;
    color: ${COLOR.font.darkBlue};
  `,
  LoginLabelText: styled.Text`
    font-size: ${moderateScale(FONTS.size.xlSmall)}px;
    font-weight: ${FONTS.weight.medium};
    line-height: ${moderateScale(19)}px;
    color: ${COLOR.font.darkBlue};
  `,
};
