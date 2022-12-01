import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledCustomDrawer = {
  Wrapper: styled.View`
    flex: 1;
    padding-bottom: 60px;
  `,

  Logout: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
    margin-left: -2px;
    margin-bottom: 50px;
  `,

  LogoutText: styled.Text`
    margin-left: 8px;
    color: ${COLOR.subheading};
    font-weight: 500;
  `,
  InstagramBtn: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 30px;
    padding-horizontal: 20px;
  `,
  InstagramText: styled.Text`
    color: ${COLOR.subheading};
    font-weight: ${FONTS.weight.medium};
  `,
  InstagramImage: styled.Image`
    width: 24px;
    height: 24px;
    margin-right: 10px;
  `,
  AdditinallyInfoWrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-horizontal: 20px;
  `,
  AdditinallyInfoText: styled.Text`
    color: ${COLOR.subheading};
    font-weight: ${FONTS.weight.medium};
  `,
};
