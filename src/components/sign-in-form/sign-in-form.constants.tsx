import * as yup from 'yup';

export const SIGN_IN_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Not valid email'),
  password: yup.string().min(8, ({ min }) => `Password must be ${min} symbols`),
});
