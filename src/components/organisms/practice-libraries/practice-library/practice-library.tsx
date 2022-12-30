import React from 'react';
import { View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';
import { PracticeLibraryModal } from '../practice-library-modal';

import { DEVICE_WIDTH } from '@services/helpers/device-utils';
import { useOpenCloseModal } from '@services/hooks/open-close';
import { getSubscription } from '@services/store/auth/auth.selectors';

import { IPracticeLibraryProps } from './practice-library.typings';

import { StyledImage, StyledPracticeLibrary as Styled } from './practice-library.styles';

const WIDTH = (DEVICE_WIDTH * 42) / 100;

export const PracticeLibrary: React.FC<IPracticeLibraryProps> = props => {
  const { isWithoutActions, isWithoutAskModal, ...library } = props;
  const { subscription: libSubscription, image, userGoals, title, description } = library;
  const { isOpen, onToggle } = useOpenCloseModal();
  const userSubStatus = useSelector(getSubscription);
  const isLockPractice = userSubStatus === 'FREE' && libSubscription === 'Subscription';

  return (
    <>
      <PracticeLibraryModal
        isOpen={isOpen}
        library={library}
        closeModal={onToggle}
        isWithoutActions={isWithoutActions}
        isWithoutAskModal={isWithoutAskModal}
        isLockPractice={isLockPractice}
      />
      <Styled.PracticeLibrary activeOpacity={0.9} onPress={onToggle} width={WIDTH}>
        <View>
          <Image source={{ uri: image }} width={WIDTH} height={moderateScale(103)} styles={StyledImage} />

          {userGoals[0] && (
            <Styled.TypeContainer>
              <Styled.Type numberOfLines={1}>{userGoals[0]}</Styled.Type>
            </Styled.TypeContainer>
          )}
        </View>
        <Styled.TitleWrapper isLockPractice={isLockPractice} width={WIDTH}>
          {isLockPractice && <Icon type="lock" size={18} styles={Styled.LockSvg} />}
          <Styled.Title isLockPractice={isLockPractice} numberOfLines={1}>
            {title}
          </Styled.Title>
        </Styled.TitleWrapper>

        <Styled.Description numberOfLines={2}>{description}</Styled.Description>
      </Styled.PracticeLibrary>
    </>
  );
};
