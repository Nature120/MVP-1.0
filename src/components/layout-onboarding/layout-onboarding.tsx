import React from 'react';

import { BackButton } from '@components/back-button/back-button';
import { ButtonOnboarding } from '@components/button-onboarding';
import { ButtonWithLink } from '@components/button-with-link';
import { ProgressBar } from '@components/progress-bar';
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
    isButtonDisabled,
    isWithoutRedirect,
    onRoutePressNavigateTo,
  } = props;
  const { progress, pressHandler, nextRoute } = useLayoutOnboarding(onPress, isWithoutRedirect);
  return (
    <>
      <Styled.Header>
        <Styled.ProgressBarWrapper>
          <ProgressBar current={progress.current} total={progress.total} />
        </Styled.ProgressBarWrapper>
        <BackButton width={32} height={32} />
      </Styled.Header>

      <Styled.ChildrenWrapper>{children}</Styled.ChildrenWrapper>
      {isButtonWithLink ? (
        <ButtonWithLink
          isDisabled={isButtonDisabled}
          onPress={pressHandler}
          onTextPressNavigateTo={onRoutePressNavigateTo || nextRoute}
          buttonText={buttonText}
          bottomText={bottomText}
          routeText={routeText}
        />
      ) : (
        <ButtonOnboarding buttonText={buttonText} onPress={pressHandler} isDisabled={isButtonDisabled} />
      )}
    </>
  );
};
