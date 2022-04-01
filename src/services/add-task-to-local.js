import _ from "lodash";
import local from "../helpers/local";

export default function addTaskToLocal(email, taskObj) {
  const key = `MY_TODO_TASKS_${_.toUpper(email)}`
  const currentTasks = local.get(key)
  if (_.isEmpty(currentTasks)) return local.set(key, [taskObj])
  return local.set(key, [taskObj, ...currentTasks])
}