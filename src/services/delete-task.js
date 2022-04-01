import _ from 'lodash';
import local from '../helpers/local';
import getAllUserTasks from "./get-all-user-tasks";

export default function deleteTask(email, taskId) {
  const allTasks = getAllUserTasks(email);
  const modifiedTaskList = allTasks.filter((task) => task.id !== taskId);
  const key = `MY_TODO_TASKS_${_.toUpper(email)}`
  local.set(key, modifiedTaskList)
  return modifiedTaskList;
}

