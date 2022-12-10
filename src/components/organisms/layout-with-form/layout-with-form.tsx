import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';

import { isIOS } from '@services/helpers/device-utils';

import { TViewProps } from '@typings/common';

import { LayoutWithFormStyled as Styled } from './layout-with-form.styles';

interface IProp {
  children: React.ReactNode;
  cssPropContainer: FlattenSimpleInterpolation;
}

export const LayoutWithForm: React.FC<IProp> = ({ children, cssPropContainer }) => {
  const containerWrapper: TViewProps = { flexGrow: 1, justifyContent: 'space-between' };

  return (
    <Styled.Container cssPropContainer={cssPropContainer} behavior={isIOS ? 'padding' : 'height'}>
      {isIOS ? (
        <Styled.ScrollViewIOS>{children}</Styled.ScrollViewIOS>
      ) : (
        <Styled.ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={containerWrapper}>
          {children}
        </Styled.ScrollView>
      )}
    </Styled.Container>
  );
};
