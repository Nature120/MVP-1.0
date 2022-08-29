import { Switch } from 'react-native-switch';
import styled from 'styled-components/native';

export const StyledToggler = {
  Toggler: styled.View`
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  `,
  Switch: styled(Switch)`
    width: 60px;
  `,
};
