import { useMemo, useState } from 'react';

import { IProgressBarProps } from '@components/progress-bar/progress-bar.typings';
import { ON_BOARD_ROUTES } from '@constants/routes';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useOnboardingNextRoute } from '@services/hooks/onboarding-next-route';
import { TOnPress } from './layout-onboarding.typings';

export const useLayoutOnboarding = (onPress?: TOnPress, isWithoutRedirect?: boolean) => {
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

  const onButtonPressAsync = async () => {
    onPress && (await onPress());
    !isWithoutRedirect && navigate(nextRoute as never);
  };

  const onButtonPress = () => {
    onPress && onPress();
    !isWithoutRedirect && navigate(nextRoute as never);
  };

  const isAsync = onPress && onPress.constructor.name === 'AsyncFunction';
  const pressHandler = isAsync ? onButtonPressAsync : onButtonPress;

  return {
    progress,
    pressHandler,
    nextRoute,
  };
};
