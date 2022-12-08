import * as yup from 'yup';

export const CONFIRM_VALIDATION_SCHEMA = yup.object().shape({
  password: yup.string().min(8, 'Password must contain at least 8 symbols').matches(/^\S*$/, 'You have whitespace'),
});
