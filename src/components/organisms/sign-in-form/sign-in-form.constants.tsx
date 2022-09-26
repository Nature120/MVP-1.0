import * as yup from 'yup';

export const SIGN_IN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Not valid email'),
  password: yup.string().min(8, ({ min }) => `Password must be ${min} symbols`),
});

export const ERROR_CODES = {
  'auth/email-already-in-use': 'That email address is already in use!',
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
  'auth/invalid-email': 'That email address is invalid!',
  'auth/too-many-requests': 'To many requests from this device',
};
