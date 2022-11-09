import { DEVICE_WIDTH } from '@services/helpers/device-utils';

export const MAX_PAGES_COUNT = 6;
export const MOODS_COUNT = 5;
export const ITEM_HEIGHT = 30;
export const MARGIN_BOTTOM = 16;
export const DAYS_WIDTH = 41;
export const STATS_CANVAS_WIDTH = DEVICE_WIDTH - 24 * 2 - DAYS_WIDTH;
export const FIRST_COLUMN_WIDTH = (STATS_CANVAS_WIDTH * 8.783) / 100; //8.783 - width percent of first column
export const COLUMN_WIDTH = (STATS_CANVAS_WIDTH - FIRST_COLUMN_WIDTH) / 4;

//FIXME delete
export const INPUT_DATA = [
  {
    date: new Date(2022, 8, 18, 0, 0, 0, 0),
    before: [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5],
    after: [4, 5, 4],
  },
  {
    date: new Date(2022, 10, 3, 0, 0, 0, 0),
    before: [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5],
    after: [4, 5, 4],
  },
  {
    date: new Date(2022, 10, 4, 0, 0, 0, 0),
    before: [2, 2, 2],
    after: [5, 3, 5],
  },
  {
    date: new Date(2022, 10, 5, 0, 0, 0, 0),
    before: [4, 2, 4],
    after: [2, 5, 5],
  },
  {
    date: new Date(2022, 10, 6, 0, 0, 0, 0),
    before: [2, 3, 3],
    after: [5, 2, 5],
  },
  {
    date: new Date(2022, 10, 7, 0, 0, 0, 0),
    before: [4, 3, 2],
    after: [4, 3, 5],
  },
  {
    date: new Date(2022, 10, 8, 0, 0, 0, 0),
    before: [3, 3, 4],
    after: [5, 5, 2],
  },
  {
    date: new Date(2022, 10, 9, 0, 0, 0, 0),
    before: [4, 3, 2],
    after: [2, 4, 4],
  },
  {
    date: new Date(2022, 10, 10, 0, 0, 0, 0),
    before: [2, 2, 2],
    after: [2, 2, 2],
  },
  {
    date: new Date(2022, 10, 11, 0, 0, 0, 0),
    before: [2, 2, 2],
    after: [2, 2, 2],
  },
  {
    date: new Date(2022, 10, 12, 0, 0, 0, 0),
    before: [2, 2, 2],
    after: [2, 2, 2],
  },
];
