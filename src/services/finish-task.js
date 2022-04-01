import _ from 'lodash';
import local from '../helpers/local';
import getAllUserTasks from './get-all-user-tasks';

export default function finishTask(email, taskId) {
  const allTasks = getAllUserTasks(email);
  const modifiedTaskList = allTasks.reduce((acc, task) => {
    if (task.id === taskId) acc.push({ ...task, checked: !task.checked });
    else acc.push(task);
    return acc;
  }, []);
  const key = `MY_TODO_TASKS_${_.toUpper(email)}`
  local.set(key, modifiedTaskList)
  return modifiedTaskList;
}
