import * as yup from 'yup';

export const REGISTER_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().email('Not valid email'),
  first_name: yup.string().min(3, ({ min }) => `First name must be ${min} symbols`),
  password: yup.string().min(8, ({ min }) => `Password must be ${min} symbols`),
});
