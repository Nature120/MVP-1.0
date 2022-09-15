import { Title } from 'react-native-paper';
import styled from 'styled-components/native';

import { RINGS_SIZE } from '@components/rings/rings.constants';

import { FONTS } from '@theme/fonts';

export const StyledModalChangeGoal = {
  ModalText: styled(Title)`
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    text-align: center;
    margin: 43px 0 24px;
  `,

  EditGoal: styled.TouchableOpacity`
    position: absolute;
    top: 17%;
    left: ${RINGS_SIZE / 2 - 25 / 2}px;
    z-index: 20;
  `,
};
