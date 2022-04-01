import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import addTaskToLocal from '../services/add-task-to-local';
import setNewTaskPattern from '../services/set-new-task-pattern';

export default function AddTaskButton() {
  const { currentTask, email, taskCategory } = useContext(GlobalContext);

  const handleClick = () => {
    const task = setNewTaskPattern(currentTask, taskCategory)
    addTaskToLocal(email, task)
  }
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
