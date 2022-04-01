import validator from 'validator';

export default function validateFullName(name) {
  if (!validator.isEmpty(name)) {
    const nameArr = name.split(' ');
    return (
      nameArr.length >= 2 && nameArr.every((value) => validator.isAlpha(value))
    );
  }
  return false;
}