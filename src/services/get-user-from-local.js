import _ from 'lodash';
import local from "../helpers/local";

export default function getUserFromLocal(email) {
  const key = 'MY_TODO_REGISTERED_USERS';
  const currentLocal = local.get(key);
  const user = currentLocal.find(
    (value) => _.toLower(value.email) === _.toLower(email),
  );
  return { name: user.name, email: user.email };
}
