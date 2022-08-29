import React from 'react';

import { IProp } from './input.typings';

import { InputStyles as Styled } from './input.styles';

export const Input: React.FC<IProp> = ({
  placeHolderTextColor,
  placeHolder,
  value,
  keyboardType = 'default',
  handleBlur,
  handleChange,
  cssInput,
}) => {
  return (
    <>
      <Styled.Input
        placeholder={placeHolder}
        value={value}
        keyboardType={keyboardType}
        onChangeText={handleChange}
        onBlur={handleBlur}
        caretHidden={false}
        autoCorrect={false}
        placeholderTextColor={placeHolderTextColor}
        cssInput={cssInput}
      />
    </>
  );
};
