import React from 'react';

import { isIOS } from '@services/helpers/device-utils';

import { TViewProps } from '@typings/common';

import { ContainerWithFormStyled as Styled } from './container-with-form.styles';

interface IProp {
  layout: () => JSX.Element;
  cssPropContainer: any;
}

export const ContainerWithForm: React.FC<IProp> = ({ layout, cssPropContainer }) => {
  const containerWrapper: TViewProps = { flexGrow: 1, justifyContent: 'space-between' };

  return (
    <Styled.Container cssPropContainer={cssPropContainer} behavior={isIOS ? 'padding' : 'height'}>
      {isIOS ? (
        <Styled.ScrollViewIOS>{layout()}</Styled.ScrollViewIOS>
      ) : (
        <Styled.ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={containerWrapper}>
          {layout()}
        </Styled.ScrollView>
      )}
    </Styled.Container>
  );
};
