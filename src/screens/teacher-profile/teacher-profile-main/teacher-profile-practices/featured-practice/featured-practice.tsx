import React from 'react';
import { scale } from 'react-native-size-matters';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';
import { PracticeLibraryModal } from '@components/organisms/practice-libraries/practice-library-modal';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { usePracticeLocked } from '@services/hooks/practiceLocked';

import { IPracticeLibrary } from '@typings/common';

import { FeaturedPracticeStyled as Styled } from './featured-practice.styles';

interface IProp {
  featuredPractice: IPracticeLibrary;
}

export const FeaturedPractice: React.FC<IProp> = ({ featuredPractice }) => {
  const { image, userGoals, title, description, subscription } = featuredPractice as IPracticeLibrary;

  const imageWidth = DEVICE_WIDTH - scale(42);
  const { isOpen, onToggle } = useOpenCloseModal();

  const { isLockPractice } = usePracticeLocked(subscription as string);

  const categoryText = userGoals?.[0] || 'No Category';

  return (
    <>
      <PracticeLibraryModal
        isOpen={isOpen}
        library={featuredPractice}
        closeModal={onToggle}
        isWithoutActions={false}
        isWithoutAskModal={false}
        isLockPractice={isLockPractice}
      />

      <Styled.ContainerBtn onPress={onToggle}>
        <Styled.ImageWrapper>
          <Image source={{ uri: image }} resizeMode="cover" width={imageWidth} height={218} styles={Styled.Image} />
          <Styled.CategoryWrapper>
            <Styled.CategoryText numberOfLines={1}>{categoryText}</Styled.CategoryText>
          </Styled.CategoryWrapper>
        </Styled.ImageWrapper>
        <Styled.WrapperTitle>
          {isLockPractice && <Icon type="lock" size={28} styles={Styled.LockSvg} />}
          <Styled.Title numberOfLines={2}>{title}</Styled.Title>
        </Styled.WrapperTitle>
        <Styled.Text numberOfLines={1}>{description}</Styled.Text>
      </Styled.ContainerBtn>
    </>
  );
};
