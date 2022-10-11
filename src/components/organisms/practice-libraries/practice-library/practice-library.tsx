import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { Image } from '@components/atoms/image';
import { PracticeLibraryModal } from '../practice-library-modal';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';
import { useOpenCloseModal } from '@services/hooks/open-close';

import { IPracticeLibraryProps } from './practice-library.typings';

import { StyledImage, StyledPracticeLibrary as Styled } from './practice-library.styles';

const WIDTH = (DEVICE_WIDTH * 42) / 100;

export const PracticeLibrary: React.FC<IPracticeLibraryProps> = props => {
  const { title, image, description, userGoals, isWithoutActions, isWithoutAskModal } = props;
  const { isOpen, onToggle } = useOpenCloseModal();

  return (
    <>
      {isOpen && (
        <PracticeLibraryModal
          isOpen={isOpen}
          library={props}
          closeModal={onToggle}
          isWithoutActions={isWithoutActions}
          isWithoutAskModal={isWithoutAskModal}
        />
      )}

      <Styled.PracticeLibrary activeOpacity={0.9} onPress={onToggle} width={WIDTH}>
        <View>
          <Image source={{ uri: image }} width={WIDTH} height={moderateScale(103)} styles={StyledImage} />

          <Styled.TypeContainer>
            <Styled.Type numberOfLines={1}>{userGoals[0]}</Styled.Type>
          </Styled.TypeContainer>
        </View>

        <Styled.Title numberOfLines={1}>{title}</Styled.Title>

        <Styled.Description numberOfLines={2}>{description}</Styled.Description>
      </Styled.PracticeLibrary>
    </>
  );
};
