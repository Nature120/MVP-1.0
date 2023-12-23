import React from 'react';

import { Image } from '@components/atoms/image';
import { PracticeLibraryModal } from '../practice-library-modal';

import { useOpenCloseModal } from '@services/hooks/open-close';

import { IPracticeLibraryCollapsedProps } from './practice-library-collapsed.typings';

import {
  COLLAPSED_HEIGHT,
  IMAGE_WIDTH,
  StyledImage,
  StyledPracticeLibraryCollapsed as Styled,
} from './practice-library-collapsed.styles';

export const PracticeLibraryCollapsed: React.FC<IPracticeLibraryCollapsedProps> = ({ library }) => {
  const { isOpen, onToggle } = useOpenCloseModal();

  return (
    <>
      <PracticeLibraryModal
        isOpen={isOpen}
        closeModal={onToggle}
        library={library}
        isWithoutActions={true}
        isImmersionTimerModal={true}
      />
      <Styled.CollapsedLibrary onPress={onToggle} activeOpacity={0.5}>
        <Styled.Left>
          <Styled.Title numberOfLines={1}>{library.title}</Styled.Title>
          <Styled.Description numberOfLines={2}>{library.description}</Styled.Description>
        </Styled.Left>
        <Styled.Right>
          <Image source={{ uri: library.image }} width={IMAGE_WIDTH} height={COLLAPSED_HEIGHT} styles={StyledImage} />
          {library?.userGoals?.[0] && (
            <Styled.TypeContainer>
              <Styled.Type numberOfLines={1}>{library.userGoals[0]}</Styled.Type>
            </Styled.TypeContainer>
          )}
        </Styled.Right>
      </Styled.CollapsedLibrary>
    </>
  );
};
