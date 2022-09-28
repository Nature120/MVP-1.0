import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Icon } from '@components/atoms/icon';
import { Spacer } from '@components/atoms/spacer';
import { PracticeLibrary } from './practice-library';

import { IPracticeLibrariesProps } from './practice-libraries.typings';
import { IPracticeLibrary } from '@typings/common';

import { StyledPracticeLibraries as Styled } from './practice-libraries.styles';

export const PracticeLibraries: React.FC<IPracticeLibrariesProps> = props => {
  const { title, isWithForwardArrow, libraries, isWithoutActions, onEndReached, onMomentumScrollBegin } = props;

  const renderItem: ListRenderItem<IPracticeLibrary> = ({ item, index }) => (
    <Spacer
      key={item.title}
      gap={16}
      isHorizontal
      isEqual
      startEndGap={24}
      index={index}
      isLastItem={index === libraries.length - 1}>
      <PracticeLibrary {...item} isWithoutActions={isWithoutActions} />
    </Spacer>
  );

  return (
    <>
      <Styled.Header>
        <Styled.Title>{title}</Styled.Title>
        {isWithForwardArrow && <Icon type="arrowRight" colorIcon="cloudyGreen" size={24} />}
      </Styled.Header>

      <FlatList
        data={libraries}
        decelerationRate="fast"
        renderItem={renderItem}
        keyExtractor={item => item.title}
        showsHorizontalScrollIndicator={false}
        numColumns={1}
        horizontal
        onEndReachedThreshold={0.1}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onEndReached={onEndReached}
      />
    </>
  );
};
