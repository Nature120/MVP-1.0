import React from 'react';
import { Modal, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';

import { Button } from '@components/atoms/button';
import { Image } from '@components/atoms/image';
import { Spacer } from '@components/atoms/spacer';
import { AskModal } from '@components/molecules/ask-modal';
import { ButtonIcon } from '@components/molecules/button-icon';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { AdditionalInfo } from './additional-info/additional-info';
import { HeaderInfo } from './header-info/header-info';
import { MainInfoSection } from './main-info-section/main-info-section';
import { usePracticeLibraryModal } from './practice-library-modal.state';
import { SubscribeSection } from './subscribe-section/subscribe-section';

import { DEVICE_WIDTH, isIOS } from '@services/helpers/device-utils';
import { useAppSelector } from '@services/hooks/redux';

import { IPracticeLibraryModalProps } from './practice-library-modal.typings';

import { contentContainerStyle, StyledPracticeLibraryModal as Styled } from './practice-library-modal.styles';

export const PracticeLibraryModal: React.FC<IPracticeLibraryModalProps> = props => {
  const {
    isOpen,
    isWithoutActions,
    isWithoutAskModal,
    closeModal,
    isOpenAsk,
    closeModalAsk,
    saveResponse,
    navigateToTimer,
    openModalAsk,
    onConfirmPress,
    onToggleBookMark,
    toggleBookMark,
    isSubscriptionPractice,
    isAudioFile,
  } = usePracticeLibraryModal(props);

  const { commentBeforeImmersion } = useAppSelector(store => store.app);

  const { title, image, description, userGoals, season, indoorOutdoor } = props.library;
  const { isLockPractice } = props;

  const insets = useSafeAreaInsets();

  return (
    <Modal transparent={false} visible={isOpen} animationType="slide">
      {!isWithoutAskModal && (
        <AskModal
          isVisible={isOpenAsk}
          onClose={closeModalAsk}
          onButtonPress={saveResponse}
          onTextPress={navigateToTimer}
          onConfirmPress={onConfirmPress}
          titleText={'today'}
        />
      )}
      <Styled.PracticeLibraryModal contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
        <Styled.Header>
          <Image
            source={{ uri: image }}
            width={DEVICE_WIDTH}
            height={isIOS ? verticalScale(235) : verticalScale(260)}
            styles={Styled.Image}
            resizeMode="cover"
          />
          <Styled.ImageHeader top={insets.top}>
            <ButtonIcon
              isWithBg
              type="arrowLeft"
              iconIndent={7}
              size={36}
              colorIcon="cloudyGreen"
              onPress={closeModal}
            />
          </Styled.ImageHeader>
          <HeaderInfo userGoals={userGoals} isAudioFile={isAudioFile} />
        </Styled.Header>
        {isLockPractice ? (
          <Styled.ContentWrapper>
            <Styled.Content>
              <MainInfoSection
                isAudioFile={isAudioFile}
                title={title}
                season={season}
                indoorOutdoor={indoorOutdoor}
                description={description}
                onToggleBookMark={onToggleBookMark}
                toggleBookMark={toggleBookMark}
                isSubscriptionPractice={isSubscriptionPractice}
                isLockPractice={isLockPractice}
              />
            </Styled.Content>
            <SubscribeSection closeModal={closeModal} />
          </Styled.ContentWrapper>
        ) : (
          <Styled.ContentWrapper>
            <Styled.Content>
              <View>
                <MainInfoSection
                  isAudioFile={isAudioFile}
                  season={season}
                  indoorOutdoor={indoorOutdoor}
                  title={title}
                  description={description}
                  onToggleBookMark={onToggleBookMark}
                  toggleBookMark={toggleBookMark}
                  isSubscriptionPractice={isSubscriptionPractice}
                />
                <AdditionalInfo practice={props.library} isAudioFile={isAudioFile} />
                <Styled.Tags>
                  {userGoals.map((userGoal, index, arr) => (
                    <Spacer isHorizontal key={userGoal + index} gap={8} isLastItem={index === arr.length - 1}>
                      <Spacer gap={8}>
                        <Styled.Tag>
                          <Styled.TagText>{userGoal}</Styled.TagText>
                        </Styled.Tag>
                      </Spacer>
                    </Spacer>
                  ))}
                </Styled.Tags>
                {!isWithoutActions && <TogglerDoNotDisturb isWithPadding />}
              </View>
              {!isWithoutActions && (
                <Styled.ButtonWrapper>
                  <Button
                    buttonText="START TIMER"
                    height={50}
                    onPress={isWithoutAskModal || commentBeforeImmersion ? navigateToTimer : openModalAsk}
                  />
                </Styled.ButtonWrapper>
              )}
            </Styled.Content>
          </Styled.ContentWrapper>
        )}
      </Styled.PracticeLibraryModal>
    </Modal>
  );
};
