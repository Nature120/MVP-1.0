import { moderateScale, verticalScale } from 'react-native-size-matters';
import styled, { css } from 'styled-components/native';

import { TextComponent } from '@components/atoms/text-component';
import { Title } from '@components/atoms/title';

import { isIOS } from './../../../../services/helpers/device-utils';
import { DEVICE_WIDTH } from '@services/helpers/device-utils';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const contentContainerStyle = { flexGrow: 1 };

export const StyledPracticeLibraryModal = {
  PracticeLibraryModal: styled.ScrollView`
    flex: 1;
    background-color: ${COLOR.background.extraLightMint};
  `,
  ImageHeader: styled.View<{ top: number; isWithoutActions?: boolean }>`
    position: absolute;
    width: ${DEVICE_WIDTH - 24 * 2}px;
    top: ${({ top }) => top + 8}px;
    left: 24px;
    flex-direction: row;
  `,
  SoundWrapper: styled.View`
    flex: 1;
  `,
  ControlsWrapper: styled.View`
    flex-direction: row;
    justify-content: space-between;

    width: ${DEVICE_WIDTH - 100}px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: 80px;
  `,
  LockSvg: css`
    margin-right: 16px;
  `,
  TitleWrapper: styled.View`
    flex-direction: row;
    padding-top: 24px;
  `,
  SoundTitle: styled(Title)`
    width: ${moderateScale(280)}px;
    margin-bottom: 20px;
  `,
  SoundDescription: styled(TextComponent)`
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 26px;
    color: ${COLOR.subheading};
  `,
  ContentWrapper: styled.View`
    flex: 1;
    background-color: ${COLOR.background.extraLightMint};
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
  `,

  Content: styled.View`
    flex: 1;
    margin-horizontal: 24px;
    justify-content: space-between;
  `,

  Header: styled.View`
    height: ${isIOS ? verticalScale(220) : verticalScale(240)}px;
  `,

  Title: styled(Title)`
    max-width: 100%;
    margin-bottom: 20px;
  `,
  Description: styled(TextComponent)<{ isFirst: boolean }>`
    margin-top: ${props => (props.isFirst ? 0 : 20)}px;
    font-size: ${FONTS.size.xlSmall}px;
    line-height: 26px;
    color: ${COLOR.subheading};
  `,
  Tags: styled.View`
    margin-bottom: 36px;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  Image: css`
    position: absolute;
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
  BookmarkBtn: styled.TouchableOpacity`
    margin-top: 20px;
    margin-bottom: 15px;
    align-items: flex-end;
  `,
};
