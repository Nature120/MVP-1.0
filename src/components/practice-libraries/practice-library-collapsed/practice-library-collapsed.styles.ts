import styled from 'styled-components/native';

import { COLOR } from '@theme/colors';
import { TextComponent, Title } from '@theme/components';
import { FONTS } from '@theme/fonts';

export const StyledPracticeLibraryCollapsed = {
  TypeContainer: styled.View`
    padding: 4px 4px;
    border-radius: 100px;
    position: absolute;
    left: 8px;
    bottom: 8px;
    background: rgba(22, 48, 69, 0.8);
    align-items: center;
    justify-content: center;
  `,

  Type: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.small}px;
    line-height: 12px;
    color: ${COLOR.font.white};
  `,

  CollapsedLibrary: styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    margin: 48px 0 70px;
    background-color: ${COLOR.background.extraLightMint};
    flex-direction: row;
    border-radius: 18px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
  `,

  Left: styled.View`
    padding: 22px 16px;
    width: 56%;
  `,

  Title: styled(Title)`
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.xMedium}px;
    line-height: 20px;
    margin-bottom: 4px;
  `,

  Description: styled(TextComponent)`
    font-size: 13px;
    line-height: 16px;
    color: ${COLOR.subheading};
  `,

  Right: styled.View`
    width: 44%;
  `,

  Image: styled.Image`
    border-radius: 18px;
    height: 100%;
    width: 100%;
  `,
};
