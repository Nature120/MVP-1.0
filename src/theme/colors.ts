const green = '#00622D';
const darkBlue = '#163045';
const lightGreen = '#0CA152';
const cloudyBlue = '#5A7082';
const white = '#fff';
const blue = '#376CF1';
const black = '#000';

export const COLOR = {
  primary: {
    green,
    blue,
    violet: '#8aa4f6',
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
  },
  moon: {
    before: '#9D8BD6',
    after: '#71D6D6',
  },
  font: {
    white,
    black,
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
    dark: 'rgba(22, 48, 69, 0.8)',
    beigeDark: '#E9E0D8',
    beigeLight: '#EFECE9',
    extraLightMint: '#F0F7F7',
    mintLight: '#ECF5F5',
    mintDark: '#D4E5DF',
    textInput: '#E7EEEE',
    progressBar: '#C3D7CC',
    grayWeekDayCircle: '#E9EAEC',
    lightBlueWeekDayCircle: '#6990F4',
    blueWeekDayCicrcle: '#376CF1',
  },
  shadow: { black },
  title: darkBlue,
  text: darkBlue,
  subheading: '#254660',
} as const;

export type TColorIcon = keyof typeof COLOR.icon;
export type TColorFont = keyof typeof COLOR.font;
export type TColorBackground = keyof typeof COLOR.background;
