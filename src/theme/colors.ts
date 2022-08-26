const green = '#00622D';
const darkBlue = '#163045';
const lightGreen = '#0CA152';
const cloudyBlue = '#5A7082';
const white = '#fff';

export const COLOR = {
  primary: {
    green,
    blue: '#376CF1',
    violet: '#6742D7',
    red: '#C24331',
    darkBlue,
    lightGray: '#97A0A7',
    lightGreen,
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
  },
  icon: {
    green,
    darkBlue,
    lightGreen,
    cloudyGreen: '#5C7869',
  },
  background: {
    white,
    beigeDark: '#E9E0D8',
    beigeLight: '#EFECE9',
    mintLight: '#ECF5F5',
    mintDark: '#D4E5DF',
    textInput: '#E7EEEE',
  },
  title: darkBlue,
  text: darkBlue,
  subheading: '#254660',
} as const;

export type TColorIcon = keyof typeof COLOR.icon;
export type TColorBackground = keyof typeof COLOR.background;
