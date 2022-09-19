import React from 'react';
import { ScrollView } from 'react-native';

import { Icon } from '@components/icon';
import { PracticeLibrary } from './practice-library';

import { IPracticeLibrariesProps } from './practice-libraries.typings';

import { StyledPracticeLibraries as Styled } from './practice-libraries.styles';

import { Spacer } from '@theme/components';

export const PracticeLibraries: React.FC<IPracticeLibrariesProps> = props => {
  const { title, libraries, isWithForwardArrow, isWithoutActions } = props;
  return (
    <>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {isWithForwardArrow && <Icon type="arrowRight" colorIcon="cloudyGreen" size={24} />}
      </Styled.Header>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} decelerationRate="fast" scrollEventThrottle={16}>
        {libraries.map((libraryItem, index, items) => (
          <Spacer
            key={libraryItem.title}
            gap={16}
            isHorizontal
            isEqual
            startEndGap={24}
            index={index}
            isLastItem={index === items.length - 1}>
            <PracticeLibrary {...libraryItem} isWithoutActions={isWithoutActions} />
          </Spacer>
        ))}
      </ScrollView>
    </>
  );
};
