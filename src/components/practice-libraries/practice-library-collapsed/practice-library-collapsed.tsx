import React, { useState } from 'react';

import { PracticeLibraryModal } from '../practice-library-modal';

import { IPracticeLibraryCollapsedProps } from './practice-library-collapsed.typings';

import { StyledPracticeLibraryCollapsed as Styled } from './practice-library-collapsed.styles';

export const PracticeLibraryCollapsed: React.FC<IPracticeLibraryCollapsedProps> = ({ library }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleOpen = () => setIsOpenModal(prev => !prev);

  return (
    <>
      <PracticeLibraryModal isOpen={isOpenModal} closeModal={toggleOpen} library={library} isWithoutActions />
      <Styled.CollapsedLibrary onPress={toggleOpen} activeOpacity={0.5}>
        <Styled.Left>
          <Styled.Title numberOfLines={1}>{library.title}</Styled.Title>
          <Styled.Description numberOfLines={2}>{library.description}</Styled.Description>
        </Styled.Left>

        <Styled.Right>
          <Styled.Image source={{ uri: library.image }} />
          <Styled.TypeContainer>
            <Styled.Type numberOfLines={1}>{library.type}</Styled.Type>
          </Styled.TypeContainer>
        </Styled.Right>
      </Styled.CollapsedLibrary>
    </>
  );
};
