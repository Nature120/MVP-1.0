import React, { useRef, useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { verticalScale } from 'react-native-size-matters';
import Video from 'react-native-video';

import { Button } from '@components/atoms/button';
import { Image } from '@components/atoms/image';
import { Spacer } from '@components/atoms/spacer';
import { AskModal } from '@components/molecules/ask-modal';
import { ButtonIcon } from '@components/molecules/button-icon';
import { TogglerDoNotDisturb } from '@components/molecules/toggler-do-not-disturb';
import { Icon } from '../../../atoms/icon';
import { HeaderInfo } from './header-info/header-info';
import { MainInfoSection } from './main-info-section/main-info-section';
import { usePracticeLibraryModal } from './practice-library-modal.state';
import { SubscribeSection } from './subscribe-section/subscribe-section';

import { DEVICE_HEIGHT, DEVICE_WIDTH, isIOS } from '@services/helpers/device-utils';
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
    isAudioFile,
  } = usePracticeLibraryModal(props);

  const { commentBeforeImmersion } = useAppSelector(store => store.app);

  const { isLockPractice, library } = props;

  const { image, userGoals } = library;
  const insets = useSafeAreaInsets();
  const videoRef = useRef<Video>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const onProgress = (data: { currentTime: number; playableDuration: number; seekableDuration: number }) => {
    setCurrentTime(data.currentTime);
  };
  const [isPlaying, setPlaying] = useState(true);
  const togglePlayPause = () => {
    setPlaying(!isPlaying);
  };

  const onSkipBackward = () => {
    videoRef.current?.seek(currentTime - 10);
  };

  const onSkipForward = () => {
    videoRef.current?.seek(currentTime + 10);
  };
  const isSound = library.topCategory === 'Soundscapes';
  const isVideo = library.topCategory === 'Microbreaks';

  if (isVideo && !isLockPractice) {
    return (
      <Modal transparent={false} visible={isOpen} animationType="slide">
        <Styled.ImageHeader top={insets.top + 40} style={{ zIndex: 10 }}>
          <ButtonIcon isWithBg type="arrowLeft" iconIndent={7} size={36} colorIcon="cloudyGreen" onPress={closeModal} />
        </Styled.ImageHeader>
        <Video
          ref={videoRef}
          paused={isPlaying}
          onLoad={() => setPlaying(false)}
          source={{ uri: library.videoFilename }}
          muted={false}
          style={{ height: DEVICE_HEIGHT, width: DEVICE_WIDTH }}
          ignoreSilentSwitch={'ignore'}
          onProgress={onProgress}
          playInBackground={true}
          controls={true}
          repeat={true}
          fullscreenAutorotate={true}
          resizeMode="contain"
        />
      </Modal>
    );
  }
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
        <Styled.Header style={[!isLockPractice && isSound && { height: DEVICE_HEIGHT / 1.6 }]}>
          <Image
            source={{ uri: image }}
            width={DEVICE_WIDTH}
            height={
              !isLockPractice && isSound
                ? verticalScale(DEVICE_HEIGHT / 1.6)
                : isIOS
                  ? verticalScale(235)
                  : verticalScale(260)
            }
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
              {!isSound ? (
                <MainInfoSection isAudioFile={isAudioFile} library={library} isLockPractice={isLockPractice} />
              ) : (
                <>
                  <Styled.TitleWrapper>
                    {isLockPractice && <Icon type="lock" size={35} styles={Styled.LockSvg} />}
                    <Styled.SoundTitle numberOfLines={2}>{library.title}</Styled.SoundTitle>
                  </Styled.TitleWrapper>
                  <Styled.SoundDescription numberOfLines={2}>
                    Practice slow and deep breathing while listening to this soundscape.
                  </Styled.SoundDescription>
                </>
              )}
            </Styled.Content>
            <SubscribeSection closeModal={closeModal} />
          </Styled.ContentWrapper>
        ) : (
          <Styled.ContentWrapper style={[isSound && { height: DEVICE_HEIGHT / 3 }]}>
            <Styled.Content>
              {!isSound ? (
                <View>
                  <MainInfoSection isAudioFile={isAudioFile} library={library} closeModal={closeModal} />

                  <Styled.Tags>
                    {userGoals?.map((userGoal, index, arr) => (
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
              ) : (
                <Styled.SoundWrapper>
                  <Styled.TitleWrapper>
                    {isLockPractice && <Icon type="lock" size={35} styles={Styled.LockSvg} />}
                    <Styled.SoundTitle numberOfLines={2}>{library.title}</Styled.SoundTitle>
                  </Styled.TitleWrapper>
                  <Styled.SoundDescription numberOfLines={2}>
                    Practice slow and deep breathing while listening to this soundscape.
                  </Styled.SoundDescription>

                  <Video
                    ref={videoRef}
                    paused={!isPlaying}
                    source={{ uri: library.audioFile }}
                    muted={false}
                    ignoreSilentSwitch={'ignore'}
                    audioOnly
                    playInBackground={true}
                    controls={false}
                    repeat
                    resizeMode={'contain'}
                    onProgress={onProgress}
                  />
                  <Styled.ControlsWrapper>
                    <TouchableOpacity
                      onPress={onSkipBackward}
                      activeOpacity={0.9}
                      style={{ transform: [{ rotate: '180deg' }] }}>
                      <Icon type={'player_rewind'} size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={togglePlayPause} activeOpacity={0.9}>
                      <Icon type={isPlaying ? 'player_expanded_pause_dark' : 'player_expanded_play_dark'} size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onSkipForward} activeOpacity={0.9}>
                      <Icon type={'player_rewind'} size={40} />
                    </TouchableOpacity>
                  </Styled.ControlsWrapper>
                </Styled.SoundWrapper>
              )}
              {!isWithoutActions && !isSound && (
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
