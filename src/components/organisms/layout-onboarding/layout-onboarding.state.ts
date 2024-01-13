import { useMemo, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { IProgressBarProps } from '@components/atoms/progress-bar/progress-bar.typings';

import { ON_BOARD_ROUTES } from '@navigation/navigation.constants';

import { useOnboardingNextRoute } from '@services/hooks/onboarding-next-route';

import { TOnPress } from './layout-onboarding.typings';

export const useLayoutOnboarding = <T extends object>(
  onPress?: TOnPress,
  isWithoutRedirect?: boolean,
  routePayload?: T,
) => {
  const { name } = useRoute();
  const nextRoute = useOnboardingNextRoute();
  const [progress, setProgress] = useState<IProgressBarProps>({} as IProgressBarProps);
  const { navigate } = useNavigation();

  useMemo(() => {
    setProgress({
      total: ON_BOARD_ROUTES.length + 1,
      current: ON_BOARD_ROUTES.findIndex(route => route.name === name) + 1,
    });
  }, [name]);

  const navigateToNextRoute = () => {
    !isWithoutRedirect && navigate(nextRoute as never, routePayload as never);
  };
  console.log('🟥  routePayload:', routePayload);

  const onButtonPressAsync = async () => {
    onPress && (await onPress());
    navigateToNextRoute();
  };

  const onButtonPress = () => {
    onPress && onPress();
    navigateToNextRoute();
  };

  const isAsync = onPress && onPress.constructor.name === 'AsyncFunction';
  const pressHandler = isAsync ? onButtonPressAsync : onButtonPress;

  return {
    progress,
    pressHandler,
    nextRoute,
  };
};
