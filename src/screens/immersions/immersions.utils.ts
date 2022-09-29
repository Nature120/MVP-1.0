import { IActionAddPractic } from '@services/store/auth/auth.typings';

import { IPracticeLibrary } from '@typings/common';

export const MAX_RECENT_LIBRARIES_COUNT = 10;

export const getRecentLibraries = (finishedPractices: IActionAddPractic[]) => {
  const newArr = [...finishedPractices];
  newArr.reverse();
  const uniqueLibraries = [...new Map(newArr.map(item => [item.title, item])).values()];

  const recentLibraries = uniqueLibraries.map(finished => finished.title).slice(0, MAX_RECENT_LIBRARIES_COUNT);
  return recentLibraries;
};

export const sortLibraries = (sortSchema: string[], libraries: IPracticeLibrary[]) => {
  return sortSchema.map(title => libraries.find(lib => lib.title === title)!);
};