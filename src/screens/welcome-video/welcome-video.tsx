import React, { useEffect, useState } from 'react';
import Orientation from 'react-native-orientation-locker';
import Video from 'react-native-video';
import { useIsFocused, useNavigation } from '@react-navigation/native';

import { APP_ROUTES } from '../../constants/routes';
import { IWelcomeVideoProps } from './welcome-video.types';

import { StyledWelcomeVideo as Styled } from './welcome-video.styles';

export const WelcomeVideo: React.FC<IWelcomeVideoProps> = props => {
  const [isPaused, setIsPaused] = useState(true);

  const isFocus = useIsFocused();

  useEffect(() => {
    isFocus && Orientation.lockToLandscapeLeft();
    return () => {
      Orientation.lockToPortrait();
      setIsPaused(true);
    };
  }, []);

  const { navigate } = useNavigation();

  const onOpenHome = () => {
    navigate(APP_ROUTES.drawer);
    Orientation.lockToPortrait();
    setIsPaused(true);
  };

  return (
    <Styled.WelcomeVideo>
      <Styled.ButtonWrapper onPress={onOpenHome}>
        <Styled.Text>Skip Video</Styled.Text>
      </Styled.ButtonWrapper>
      {isFocus && (
        <Video
          onEnd={onOpenHome}
          paused={isPaused}
          onLoad={() => {
            setIsPaused(false);
          }}
          source={require('./welcome-video-minimized.mp4')}
          muted={false}
          style={{ height: '100%' }}
          ignoreSilentSwitch={'ignore'}
          controls={true}
          repeat={false}
          playInBackground={false}
          resizeMode="contain"
        />
      )}
    </Styled.WelcomeVideo>
  );
};
