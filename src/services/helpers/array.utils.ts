export const getUniqueArray = <T, K extends keyof T>(array: T[], key: K) => {
  return [...new Map(array.map(item => [item[key], item])).values()];
};

export const compareArrays = (a1: string[], a2: string[]) => {
  return a1.length === a2.length && a1.every((v, i) => v === a2[i]);
};
