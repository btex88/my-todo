import _ from "lodash";
import local from "../helpers/local";

export default function regiterUserToLocal(user) {
  const key = 'MY_TODO_REGISTERED_USERS'
  const currUsers = local.get(key)
  if (_.isEmpty(currUsers)) return local.set(key, [user])
  return local.set(key, [user, ...currUsers])
}