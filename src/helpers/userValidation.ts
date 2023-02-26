import { emailValidate } from './emailValidate';

export const userValidation = (email = '', password = '') => {
  if (!email && !password) return 'You need to fill in all the fileds!';
  else if (!emailValidate(email)) return 'Wrong email validation!';
  else if (password.length < 7) return 'Min password length is 7 sybmol!';

  return '';
};
