import * as yup from 'yup';
import YupPassword from 'yup-password';

import { REG_EXP_EMAIL } from '@constants/reg-exp';

YupPassword(yup);

export const SIGN_IN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().matches(REG_EXP_EMAIL, 'Not valid email').email('Not valid email'),
  password: yup.string().min(8, 'Password must contain at least 8 symbols').matches(/^\S*$/, 'You have whitespace'),
});

export const ERROR_CODES = {
  'auth/email-already-in-use': 'That email address is already in use!',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
  'auth/invalid-email': 'That email address is invalid!',
  'auth/too-many-requests': 'To many requests from this device',
};
