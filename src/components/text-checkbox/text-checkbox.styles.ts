import { moderateScale } from 'react-native-size-matters';
import styled from 'styled-components/native';

import { IIsChecked, IStyledTextCheckboxProps } from './text-checkbox.typings';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const StyledTextCheckbox = {
  TextCheckbox: styled.TouchableOpacity<IStyledTextCheckboxProps>`
    width: 100%;
    flex-direction: row;
    box-shadow: ${props => (props.isChecked ? '0px 4px 6px rgba(0, 0, 0, 0.25)' : 'none')};
    background: ${props => (props.isChecked ? COLOR.primary.blue : COLOR.background.beigeLight)};
    align-items: center;
    padding-left: ${props => (props.isCustomComponent ? '0' : '16')}px;
    border: 2px solid ${COLOR.primary.blue};
    border-radius: ${props => (props.borderRadius ? props.borderRadius : 50)}px;
    height: ${props => (props.isCustomComponent ? 'auto' : `${42}px`)};
    ${props => props.styles}
  `,

  IconWrapper: styled.View`
    margin-right: 16px;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: ${moderateScale(45)}px;
  `,

  Text: styled.Text<IIsChecked>`
    text-transform: uppercase;
    font-family: ${FONTS.family.boldAcumin};
    font-style: normal;
    font-weight: ${FONTS.weight.semiBold};
    font-size: ${FONTS.size.medium}px;
    line-height: 19px;
    letter-spacing: 4.25px;
    color: ${props => (props.isChecked ? COLOR.background.beigeLight : COLOR.primary.blue)};
  `,
};
