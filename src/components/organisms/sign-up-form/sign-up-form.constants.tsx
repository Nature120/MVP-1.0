import * as yup from 'yup';
import YupPassword from 'yup-password';

import { REG_EXP_EMAIL } from '@constants/reg-exp';

YupPassword(yup);

export const REGISTER_VALIDATION_SCHEMA = yup.object().shape({
  email: yup.string().matches(REG_EXP_EMAIL, 'Not valid email').email('Not valid email'),
  first_name: yup.string().min(3, ({ min }) => `First name must contain at least ${min} symbols`),
  password: yup
    .string()
    .min(8, 'Password must contain at least 8 symbols')
    .minUppercase(1, 'Password must contain at least 1 upper case letter')
    .minNumbers(1, 'Password must contain at least 1 number')
    .minSymbols(1, 'Password must contain at least 1 special character')
    .matches(/^\S*$/, 'You have whitespace'),
});
