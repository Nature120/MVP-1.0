import styled from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

const imageIndent = 15;

export const contentContainerStyle = { flexGrow: 1 };

export const StyledPracticeLibraryModal = {
  PracticeLibraryModal: styled.ScrollView`
    background-color: ${COLOR.background.extraLightMint};
  `,

  SafeAreaView: styled.SafeAreaView`
    background-color: ${COLOR.background.extraLightMint};
  `,

  ImageHeader: styled.View<{ top: number; isWithoutActions?: boolean }>`
    position: absolute;
    width: ${DEVICE_WIDTH - 24 * 2}px;
    top: ${({ top }) => top + 8}px;
    left: 24px;
    flex-direction: row;
    justify-content: ${props => (props.isWithoutActions ? 'flex-end' : 'space-between')};
  `,

  TypeContainer: styled.View`
    padding: 8px 12px;
    border-radius: 100px;
    position: absolute;
    left: 24px;
    bottom: ${imageIndent + 24}px;
    background: ${COLOR.background.dark};
    align-items: center;
    justify-content: center;
  `,

  Type: styled.Text`
    font-family: ${FONTS.family.regularBoreal};
    font-weight: ${FONTS.weight.medium};
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 19px;
    color: ${COLOR.font.white};
  `,

  ContentWrapper: styled.View`
    flex: 1;
    top: -${imageIndent}px;
    background-color: ${COLOR.background.extraLightMint};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  Content: styled.View`
    margin-horizontal: 24px;
    flex: 1;
    justify-content: space-between;
  `,

  Header: styled.View`
    margin: 36px 0 26px;
    flex-direction: row;
    justify-content: space-between;
  `,

  Title: styled(Title)`
    max-width: 100%;
  `,

  // TimeWrapper: styled.View`
  //   flex-direction: row;
  //   align-items: center;
  // `,

  // Time: styled(TextComponent)`
  //   margin-left: 8px;
  //   font-size: ${FONTS.size.xlSmall}px;
  //   line-height: 19px;
  //   color: ${COLOR.font.cloudyBlue};
  // `,

  Description: styled(TextComponent)<{ isFirst: boolean }>`
    margin-top: ${props => (props.isFirst ? 0 : 20)}px;
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 26px;
    color: ${COLOR.subheading};
  `,

  Tags: styled.View`
    margin: 32px 0 28px;
    flex-direction: row;
    flex-wrap: wrap;
  `,

  Tag: styled.View`
    border: 1px solid ${COLOR.primary.dark};
    border-radius: 100px;
    padding: 8px 12px;
  `,

  TagText: styled(TextComponent)`
    font-size: 13px;
    line-height: 16px;
    color: ${COLOR.primary.dark};
  `,

  ButtonWrapper: styled.View`
    padding: 24px 0 9px;
  `,
};
