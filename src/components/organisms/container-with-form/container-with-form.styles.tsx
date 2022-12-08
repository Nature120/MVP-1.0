import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';

export const ContainerWithFormStyled = {
  Container: styled.KeyboardAvoidingView<{ cssPropContainer: any }>`
    ${({ cssPropContainer }) => cssPropContainer};
  `,
  ScrollView: styled(KeyboardAwareScrollView)`
    flex-grow: 1;
    padding-horizontal: 24px;
  `,
  ScrollViewIOS: styled.ScrollView`
    flex-grow: 1;
    padding-horizontal: 24px;
  `,
};
