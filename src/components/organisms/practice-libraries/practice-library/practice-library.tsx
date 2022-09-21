import React, { useState } from 'react';
import { View } from 'react-native';

import { PracticeLibraryModal } from '../practice-library-modal';

import { IPracticeLibraryProps } from './practice-library.typings';

import { StyledPracticeLibrary as Styled } from './practice-library.styles';

export const PracticeLibrary: React.FC<IPracticeLibraryProps> = props => {
  const { title, image, description, type, isWithoutActions } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(prev => !prev);

  return (
    <>
      {isOpen && (
        <PracticeLibraryModal
          isOpen={isOpen}
          library={props}
          closeModal={toggleOpen}
          isWithoutActions={isWithoutActions}
        />
      )}

      <Styled.PracticeLibrary activeOpacity={0.9} onPress={toggleOpen}>
        <View>
          <Styled.Image source={{ uri: image }} />

          <Styled.TypeContainer>
            <Styled.Type numberOfLines={1}>{type}</Styled.Type>
          </Styled.TypeContainer>
        </View>

        <Styled.Title numberOfLines={1}>{title}</Styled.Title>

        <Styled.Description numberOfLines={2}>{description}</Styled.Description>
      </Styled.PracticeLibrary>
    </>
  );
};
