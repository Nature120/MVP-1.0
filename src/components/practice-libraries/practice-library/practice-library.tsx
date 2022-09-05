import React from 'react';
import { View } from 'react-native';

import { IPracticeLibraryProps } from './practice-library.typings';

import { StyledPracticeLibrary as Styled } from './practice-library.styles';

export const PracticeLibrary: React.FC<IPracticeLibraryProps> = props => {
  const { title, image, description, type } = props;
  return (
    <Styled.PracticeLibrary>
      <View>
        <Styled.Image source={{ uri: image }} />

        <Styled.TypeContainer>
          <Styled.Type numberOfLines={1}>{type}</Styled.Type>
        </Styled.TypeContainer>
      </View>

      <Styled.Title numberOfLines={1}>{title}</Styled.Title>

      <Styled.Description numberOfLines={2}>{description}</Styled.Description>
    </Styled.PracticeLibrary>
  );
};
