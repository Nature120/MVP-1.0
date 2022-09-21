import { GOAL_HASH_MAP } from '@screens/onboarding/onboarding.constants';

export const ITEM_WIDTH = 80;

const LN_SIDE_COLOR = '#fff';
const LN_CENTER_COLOR = '#FFFFF000';

export const LINEAR_GRADIENT_CONFIG = {
  colors: [LN_SIDE_COLOR, LN_CENTER_COLOR, LN_SIDE_COLOR],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
};

export const PICKER_DATA = Object.keys(GOAL_HASH_MAP());
