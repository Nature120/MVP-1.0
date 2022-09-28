import styled from 'styled-components/native';

import { Title } from '@components/atoms/title';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledAskModal = {
  ModalText: styled(Title)`
    font-size: ${FONTS.size.large}px;
    line-height: 29px;
    text-align: center;
    margin: 43px 0 24px;
  `,

  TextInput: styled.TextInput`
    padding: 8px;
    border-radius: 5px;
    max-height: 97px;
    height: 97px;
    background-color: ${COLOR.background.textInput};
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.regular};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 21px;
    color: ${COLOR.font.cloudyBlue};
    margin-bottom: 46px;
  `,
};
