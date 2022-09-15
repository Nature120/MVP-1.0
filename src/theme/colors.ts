const green = '#00622D';
const darkBlue = '#163045';
const lightGreen = '#0CA152';
const cloudyBlue = '#5A7082';
const white = '#fff';
const blue = '#376CF1';

export const COLOR = {
  primary: {
    green,
    blue,
    violet: '#6742D7',
    red: '#C24331',
    darkBlue,
    lightGray: '#97A0A7',
    lightGreen,
    milk: '#fcfcfc',
    dark: '#45596a',
  },
  secondary: {
    green: '#6BA184',
    blue: '#9BB5F8',
    violet: '#B3A0EB',
  },
  font: {
    white,
    black: '#000',
    cloudyBlue,
    darkBlue,
    lightGrey: '#8498A8',
    red: '#FF0000',
  },
  icon: {
    blue,
    white,
    green,
    darkBlue,
    lightGreen,
    cloudyBlue,
    cloudyGreen: '#5C7869',
    grey: '#BFBFBF',
  },
  background: {
    white,
    blue,
    beigeDark: '#E9E0D8',
    beigeLight: '#EFECE9',
    extraLightMint: '#F0F7F7',
    mintLight: '#ECF5F5',
    mintDark: '#D4E5DF',
    textInput: '#E7EEEE',
    progressBar: '#C3D7CC',
  },
  title: darkBlue,
  text: darkBlue,
  subheading: '#254660',
} as const;

export type TColorIcon = keyof typeof COLOR.icon;
export type TColorFont = keyof typeof COLOR.font;
export type TColorBackground = keyof typeof COLOR.background;
