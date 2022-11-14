import { Community } from '@screens/community';
import { Home } from '@screens/home';
import { Practices } from '@screens/practices';

import { IBottomTabRoutes } from './bottom-tab.typings';

export const BOTTOM_TAB_ROUTES: IBottomTabRoutes[] = [
  { name: 'Home', component: Home, icon: { type: 'home', width: 40, height: 30 } },
  { name: 'Practices', component: Practices, icon: { type: 'practices', width: 30, height: 30 } },
  { name: 'Community', component: Community, icon: { type: 'community', width: 40, height: 30 } },
];
