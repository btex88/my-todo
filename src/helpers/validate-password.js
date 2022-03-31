import validator from 'validator';

export default function validatePassword(arg) {
  const options = {
    minLength: 6,
    minLowercase: 2,
    minUppercase: 0,
    minNumbers: 1,
    minSymbols: 0,
  };
  return validator.isStrongPassword(arg, options);
}
