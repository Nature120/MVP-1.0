import React from 'react';

import { Layout } from '@components/molecules/layout';
import { ITextCheckBox } from '@components/molecules/text-checkbox/text-checkbox.typings';
import { TextCheckboxGroup } from '@components/molecules/text-checkbox-group';
import { LayoutOnboarding } from '@components/organisms/layout-onboarding';
import { Header } from './molecules/header';
import { useWhatBrings } from './what-brings.state';

import { useParam } from '@services/hooks/param';

import { StyledWhatBrings as Styled } from './what-brings.styles';

export const WhatBrings: React.FC = () => {
  const { whatBrings, onPress, onChangeVariants } = useWhatBrings();
  const { params: whatBringsVariants } = useParam<ITextCheckBox[]>();

  return (
    <Layout ellipseColor="green" isWithGradient isWithScroll>
      <LayoutOnboarding
        buttonText="continue"
        isButtonWithLink
        routeText="Skip for now"
        onPress={onPress}
        isButtonDisabled={!whatBrings.length}>
        <Header />

        <Styled.CheckboxGroup>
          <TextCheckboxGroup
            isMulti
            gap={14}
            onChange={onChangeVariants}
            variants={whatBringsVariants as ITextCheckBox[]}
          />
        </Styled.CheckboxGroup>
      </LayoutOnboarding>
    </Layout>
  );
};
