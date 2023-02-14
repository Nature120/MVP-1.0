export const getFirstName = (string: string | null) => {
  if (string === null) {
    return;
  }
  return string.split(' ')[0];
};
