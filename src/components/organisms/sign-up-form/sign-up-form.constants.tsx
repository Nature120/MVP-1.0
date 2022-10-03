import * as yup from 'yup';

export const REGISTER_VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^(([^<>()\]\\.!#$%&’*+=?^{|}~,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Not valid email',
    )
    .email('Not valid email'),
  first_name: yup.string().min(3, ({ min }) => `First name must be ${min} symbols`),
  password: yup.string().matches(/^\S*$/, 'whitespace'),
});
