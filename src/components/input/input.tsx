import React from 'react';

import { IProp } from './input.typings';

import { InputStyles as Styled } from './input.styles';

import { COLOR } from '@theme/colors';

export const Input: React.FC<IProp> = ({
  placeHolderTextColor = 'lightGrey',
  placeHolder,
  value,
  keyboardType = 'default',
  handleBlur,
  handleChange,
  onFocus,
  cssInput,
}) => {
  return (
    <>
      <Styled.Input
        onFocus={onFocus}
        placeholder={placeHolder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        onBlur={handleBlur}
        caretHidden={false}
        autoCorrect={false}
        autoCapitalize="none"
        placeholderTextColor={COLOR.font[placeHolderTextColor]}
        cssInput={cssInput}
      />
    </>
  );
};
