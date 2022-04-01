import _ from 'lodash';
import local from '../helpers/local';

export default function getAllUserTasks(email) {
  const key = `MY_TODO_TASKS_${_.toUpper(email)}`;
  const allTasks = local.get(key);
  if (_.isEmpty(allTasks)) return [];
  return allTasks;
}
