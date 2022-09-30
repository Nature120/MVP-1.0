export const getUniqueArray = <T, K extends keyof T>(array: T[], key: K) => {
  return [...new Map(array.map(item => [item[key], item])).values()];
};
