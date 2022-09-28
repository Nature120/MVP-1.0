import { useRoute } from '@react-navigation/native';

import { ON_BOARD_ROUTES } from '@navigation/navigation.constants';

import { APP_ROUTES } from '@constants/routes';

export const useOnboardingNextRoute = () => {
  const { name } = useRoute();

  const nextRouteIndex = ON_BOARD_ROUTES.findIndex(route => route.name === name) + 1;
  const nextRoute = ON_BOARD_ROUTES[nextRouteIndex]?.name || APP_ROUTES.dashboard;
  return nextRoute;
};
