import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { FlattenSimpleInterpolation } from 'styled-components';
import styled from 'styled-components/native';

export const LayoutWithFormStyled = {
  Container: styled.KeyboardAvoidingView<{ cssPropContainer: FlattenSimpleInterpolation }>`
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
