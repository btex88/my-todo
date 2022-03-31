import local from "../helpers/local";

export default function regiterUserToLocal(user) {
  const key = 'MY_TODO_REGISTERED_USERS'
  const currUsers = local.get(key)
  local.set(key, [user, ...currUsers])
}