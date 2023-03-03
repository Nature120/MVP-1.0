import React, { useState } from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';

import { Icon } from '@components/atoms/icon';
import { Image } from '@components/atoms/image';
import { PracticeLibraryModal } from '@components/organisms/practice-libraries/practice-library-modal';

import { useOpenCloseModal } from '@services/hooks/open-close';
import { getSubscription } from '@services/store/auth/auth.selectors';

import { IPracticeLibrary } from '@typings/common';

import { TeacherPracticesStyled as Styled } from './teacher-practices.styles';

interface IProp {
  teacherPractices: IPracticeLibrary[];
  audioPractices: string[];
}

export const TeacherPractices: React.FC<IProp> = ({ teacherPractices, audioPractices }) => {
  const [selectedPractice, setSelectedPractice] = useState<IPracticeLibrary>({} as IPracticeLibrary);
  const [isLockSelectedPractice, setIsLockSelectedPractice] = useState<boolean>(false);
  const teacherPracticesSumm = audioPractices?.length;
  const { isOpen, onOpen, onClose } = useOpenCloseModal();
  const userSubStatus = useSelector(getSubscription);

  const onOpenModal = (practice: IPracticeLibrary, isLocked: boolean) => {
    setSelectedPractice(practice);
    setIsLockSelectedPractice(isLocked);
    onOpen();
  };

  const onCloseModal = () => {
    setSelectedPractice({} as IPracticeLibrary);
    onClose();
  };

  return (
    <View>
      <PracticeLibraryModal
        isOpen={isOpen}
        library={selectedPractice}
        closeModal={onCloseModal}
        isWithoutActions={false}
        isWithoutAskModal={false}
        isLockPractice={isLockSelectedPractice}
      />

      <Styled.Title>Nature 120 Practices</Styled.Title>
      <Styled.SubTitle>{teacherPracticesSumm} practices</Styled.SubTitle>
      <Styled.Columns>
        {teacherPractices.map((practice: IPracticeLibrary) => {
          const isLockPractice = userSubStatus === 'FREE' && practice.subscription === 'Subscription';

          return (
            <View key={practice.title}>
              <Styled.CardWrapperButton onPress={() => onOpenModal(practice, isLockPractice)}>
                <Image source={{ uri: practice.image }} width={scale(140)} height={103} styles={Styled.Image} />
                <Styled.CategoryWrapper>
                  <Styled.CategoryText numberOfLines={1}>{practice.userGoals[0]}</Styled.CategoryText>
                </Styled.CategoryWrapper>
                <Styled.WrapperTitle>
                  {isLockPractice && <Icon type="lock" size={18} styles={Styled.LockSvg} />}
                  <Styled.CardTitle numberOfLines={2}>{practice.title}</Styled.CardTitle>
                </Styled.WrapperTitle>
                <Styled.CardInfo numberOfLines={2}>{practice.description}</Styled.CardInfo>
              </Styled.CardWrapperButton>
            </View>
          );
        })}
      </Styled.Columns>
    </View>
  );
};
