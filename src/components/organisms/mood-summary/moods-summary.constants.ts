import { DEVICE_WIDTH } from '@services/helpers/device-utils';

export const MAX_PAGES_COUNT = 5;
export const MOODS_COUNT = 5;
export const ITEM_HEIGHT = 30;
export const MARGIN_BOTTOM = 16;
export const DAYS_WIDTH = 41;
export const STATS_CANVAS_WIDTH = DEVICE_WIDTH - 24 * 2 - DAYS_WIDTH;
export const FIRST_COLUMN_WIDTH = (STATS_CANVAS_WIDTH * 8.783) / 100; //8.783 - width percent of first column
export const COLUMN_WIDTH = (STATS_CANVAS_WIDTH - FIRST_COLUMN_WIDTH) / 4;
