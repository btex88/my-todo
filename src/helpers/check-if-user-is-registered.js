import _ from 'lodash';
import local from './local';

export default function checkIfUserIsRegistered(email) {
  const key = 'MY_TODO_REGISTERED_USERS';
  const currentLocal = local.get(key);
  if (!_.isEmpty(currentLocal)) {
    return currentLocal.some(
      (user) => _.toLower(user.email) === _.toLower(email),
    );
  }
  return false;
}
