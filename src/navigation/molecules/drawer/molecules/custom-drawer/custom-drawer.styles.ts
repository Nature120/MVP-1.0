import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledCustomDrawer = {
  Wrapper: styled.View`
    flex: 1;
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
    margin-top: 12px;
    margin-bottom: 30px;
    padding-horizontal: 17px;
  `,
  InstagramText: styled.Text`
    margin-left: 6px;
    color: ${COLOR.subheading};
    font-weight: ${FONTS.weight.medium};
  `,
  AdditinallyInfoWrapper: styled.View`
    margin-bottom: 40px;
    flex-direction: row;
    justify-content: space-between;
    padding-horizontal: 20px;
  `,
  AdditinallyInfoText: styled.Text`
    color: ${COLOR.subheading};
    font-weight: ${FONTS.weight.medium};
  `,
};
