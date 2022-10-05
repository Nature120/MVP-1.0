export const FONTS = {
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  size: {
    small: 10,
    xSmall: 14,
    xlSmall: 15,
    medium: 16,
    xMedium: 17,
    xLmedium: 20,
    large: 24,
    xLarge: 30,
    xlLarge: 34,
    superLarge: 64,
  },
  family: {
    mediumAcumin: 'Acumin-Pro-Medium',
    semiBoldAcumin: 'Acumin-Pro-Semibold',
    boldAcumin: 'Acumin-Pro-Bold',
    lightBoreal: 'Boreal-Light',
    lightItalicBoreal: 'Boreal-Light-Italic',
    regularBoreal: 'Boreal-Regular',
    mediumBoreal: 'Boreal-Medium',
    regularNewOrder: 'New-Order-Regular',
    mediumNewOrder: 'New-Order-Medium',
  },
} as const;

export type TFontSizes = keyof typeof FONTS.size;
export type TFontWeights = keyof typeof FONTS.weight;
export type TFontFamilies = keyof typeof FONTS.family;
