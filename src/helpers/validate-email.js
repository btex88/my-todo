import validator from 'validator';

export default function validateEmail(arg) {
  return validator.isEmail(arg);
}
