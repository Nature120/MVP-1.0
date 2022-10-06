import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const SocialButtonGroupStyles = {
  GoogleButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(8)}px;
  `,
  FaceBookButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(8)}px;
  `,
  AppleButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(24)}px;
  `,
};
