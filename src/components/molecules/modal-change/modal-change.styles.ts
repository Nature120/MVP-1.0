import { Title } from 'react-native-paper';
import styled from 'styled-components/native';

import { RINGS_SIZE } from '@components/organisms/rings/rings.constants';

import { FONTS } from '@theme/fonts';
import { Z_INDEX } from '@theme/z-index';

export const StyledModalChange = {
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
    z-index: ${Z_INDEX.alwaysTop};
  `,
};
