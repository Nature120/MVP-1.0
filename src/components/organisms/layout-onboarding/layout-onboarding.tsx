import React from 'react';

import { ProgressBar } from '@components/atoms/progress-bar';
import { BackButton } from '@components/molecules/back-button';
import { ButtonOnboarding } from '@components/molecules/button-onboarding';
import { ButtonWithLink } from '@components/molecules/button-with-link';
import { useLayoutOnboarding } from './layout-onboarding.state';

import { TLayoutOnboardingProps } from './layout-onboarding.typings';

import { StyledLayoutOnboarding as Styled } from './layout-onboarding.styles';

export const LayoutOnboarding: React.FC<TLayoutOnboardingProps> = props => {
  const {
    children,
    isButtonWithLink,
    bottomText,
    buttonText,
    routeText,
    onPress,
    onBackButtonPress,
    isButtonDisabled,
    isWithoutRedirect,
    onRoutePressNavigateTo,
    onTextPress,
  } = props;
  const { progress, pressHandler, nextRoute } = useLayoutOnboarding(onPress, isWithoutRedirect);
  return (
    <>
      <Styled.Header>
        <Styled.ProgressBarWrapper>
          <ProgressBar current={progress.current} total={progress.total} />
        </Styled.ProgressBarWrapper>
        <BackButton width={32} height={32} color="darkBlue" onPress={onBackButtonPress} />
      </Styled.Header>

      <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
      {isButtonWithLink ? (
        <ButtonWithLink
          isDisabled={isButtonDisabled}
          onPress={pressHandler}
          onTextPressNavigateTo={onTextPress ? '' : onRoutePressNavigateTo || nextRoute}
          buttonText={buttonText}
          bottomText={bottomText}
          routeText={routeText}
          onTextPress={onTextPress}
        />
      ) : (
        <ButtonOnboarding buttonText={buttonText} onPress={pressHandler} isDisabled={isButtonDisabled} />
      )}
    </>
  );
};
