import React from 'react';
import { FlatList } from 'react-native';

import { BackButton } from '@components/molecules/back-button';
import { PracticeLibrary } from '@components/organisms/practice-libraries/practice-library';
import { useStateBookMarks } from './bookmarks.state';

import { TItemRender } from '@typings/common';

import { BookMarksStyled as Styled } from './bookmarks.styles';

export const Bookmarks = () => {
  const { sortedBookmarks, columnWrapperStyles, isSortedBookmarks } = useStateBookMarks();

  const renderItem: TItemRender = ({ item }) => {
    return (
      <Styled.ItemContainer key={item.title}>
        <PracticeLibrary {...item} isWithoutAskModal={false} />
      </Styled.ItemContainer>
    );
  };

  return (
    <Styled.MainContainer>
      <Styled.Header>
        <BackButton width={32} height={32} />
        <Styled.Title>Bookmarks</Styled.Title>
      </Styled.Header>
      {isSortedBookmarks ? (
        <Styled.WarningText>You have no bookmarks yet</Styled.WarningText>
      ) : (
        <FlatList
          data={sortedBookmarks}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={columnWrapperStyles}
          keyExtractor={item => item.title}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </Styled.MainContainer>
  );
};
