import * as yup from 'yup';

import { COLOR } from '@theme/colors';
import { FONTS } from '@theme/fonts';

export const SIGN_IN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Not valid email'),
  password: yup.string().min(8, ({ min }) => `Password must be ${min} symbols`),
});

export const THEME = {
  fonts: { regular: { fontFamily: FONTS.family.lightBoreal } },
  colors: { text: COLOR.font.lightGrey },
};
