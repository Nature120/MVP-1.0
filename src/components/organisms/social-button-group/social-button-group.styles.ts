import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

export const SocialButtonGroupStyles = {
  AppleButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(8)}px;
  `,
  GoogleButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(8)}px;
  `,
  FaceBookButtonWrapper: styled.View`
    margin-bottom: ${moderateScale(14)}px;
  `,
};
