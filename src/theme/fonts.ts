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
    mediumAcumin: 'AcuminPro-Medium',
    semiBoldAcumin: 'AcuminPro-Semibold',
    boldAcumin: 'AcuminPro-Bold',
    lightBoreal: 'Boreal-Light',
    lightItalicBoreal: 'Boreal-LightItalic',
    regularBoreal: 'Boreal-Regular',
    mediumBoreal: 'Boreal-Medium',
    regularNewOrder: 'NewOrder-Regular',
    mediumNewOrder: 'NewOrder-Medium',
  },
} as const;

export type TFontSizes = keyof typeof FONTS.size;
export type TFontWeights = keyof typeof FONTS.weight;
export type TFontFamilies = keyof typeof FONTS.family;
