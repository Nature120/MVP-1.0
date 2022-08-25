export const FONTS = {
  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  size: {
    small: '10px',
    xSmall: '14px',
    xlSmall: '15px',
    medium: '16px',
    xMedium: '17px',
    xLmedium: '20px',
    large: '24px',
    xLarge: '30px',
    xlLarge: '34px',
  },
  family: {
    mediumAcumin: 'NotoSans-Medium',
    semiBoldAcumin: 'NotoSans-SemiBold',
    boldAcumin: 'NotoSans-Bold',
    lightBoreal: 'Roboto-Light',
    lightItalicBoreal: 'Roboto-LightItalic',
    regularBoreal: 'Roboto-Regular',
    mediumBoreal: 'Roboto-Medium',
    regularNewOrder: 'Lexend-Regular',
    mediumNewOrder: 'Lexend-Medium',
  },
} as const;

export type TFontSizes = keyof typeof FONTS.size;
export type TFontWeights = keyof typeof FONTS.weight;
export type TFontFamilies = keyof typeof FONTS.family;
