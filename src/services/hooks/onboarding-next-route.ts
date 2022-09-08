import { useRoute } from '@react-navigation/native';

import { APP_ROUTES, ON_BOARD_ROUTES } from '@constants/routes';

export const useOnboardingNextRoute = () => {
  const { name } = useRoute();

  const nextRouteIndex = ON_BOARD_ROUTES.findIndex(route => route.name === name) + 1;
  const nextRoute = ON_BOARD_ROUTES[nextRouteIndex]?.name || APP_ROUTES.dashboard;
  return nextRoute;
};
