export const getPartialStyledText = (
  str: string,
  renderItem: (line: string, isMatches: boolean, index: number) => JSX.Element,
  regExp = /\[([^\][]+)]/g,
) => str.split(regExp).map((line, index) => renderItem(line, Boolean(index % 2), index));
