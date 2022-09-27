import { ITipOfTheDay } from '@typings/common';

export const getRandomTip = (allTips: ITipOfTheDay[]) => {
  const randomIndex = Math.floor(Math.random() * allTips.length);
  return allTips[randomIndex];
};
