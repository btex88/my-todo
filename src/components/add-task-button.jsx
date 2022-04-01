import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';
import addTaskToLocal from '../services/add-task-to-local';
import getAllUserTasks from '../services/get-all-user-tasks';
import setNewTaskPattern from '../services/set-new-task-pattern';

export default function AddTaskButton({ displayTip }) {
  const {
    currentTask,
    user,
    taskCategory,
    setAllTasks,
    setDisplayNewTaskContainer,
  } = useContext(GlobalContext);

  const handleClick = () => {
    if (currentTask.length) {
      const task = setNewTaskPattern(currentTask, taskCategory);
      addTaskToLocal(user.email, task);
      const allTasks = getAllUserTasks(user.email);
      setAllTasks(allTasks);
      return setDisplayNewTaskContainer(false);
    }
    return displayTip('emptyTask');
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="px-4 py-3 group my-2 text-sm bg-teal-700 text-white poppins
      rounded-full"
    >
      Add task
    </button>
  );
}

AddTaskButton.propTypes = {
  displayTip: PropTypes.func
}.isRequired;
