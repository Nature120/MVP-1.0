export const getCheckboxGroupState = <T extends object, K extends Extract<keyof T, string>>(
  variants: T[],
  extractKey: K,
) => {
  return variants.map(variant => {
    const extractedVariable = variant[extractKey];

    const transformedVar =
      typeof extractedVariable === 'string' || typeof extractedVariable === 'number'
        ? extractedVariable.toString()
        : '';

    return {
      ...variant,
      name: transformedVar, //Field from variants which will be the result
      isChecked: false,
    };
  });
};
