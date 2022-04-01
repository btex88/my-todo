import _ from 'lodash';
import CryptoJS from 'crypto-js';
import local from './local';

export default function checkUserPassword(email, password) {
  const key = 'MY_TODO_REGISTERED_USERS';
  const currentLocal = local.get(key);
  const user = currentLocal.find(
    (value) => _.toLower(value.email) === _.toLower(email),
  );
  return (
    CryptoJS.AES.decrypt(user.password, user.uuid).toString(
      CryptoJS.enc.Utf8,
    ) === password
  );
}
