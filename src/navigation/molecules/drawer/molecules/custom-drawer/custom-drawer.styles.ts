import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const StyledCustomDrawer = {
  Wrapper: styled.View`
    flex: 1;
  `,

  Logout: styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 40px 20px;
    margin-left: -2px;
  `,

  LogoutText: styled.Text`
    margin-left: 8px;
    color: ${COLOR.subheading};
    font-weight: 500;
  `,
};
