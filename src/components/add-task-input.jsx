import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';

export default function AddTaskInput() {
  const { currentTask, setCurrentTask } = useContext(GlobalContext);
  return (
    <input
      type="text"
      placeholder="Add new task..."
      value={currentTask}
      onChange={({ target }) => setCurrentTask(target.value)}
      className="w-10/12 px-4 py-2 text-base text-center my-2 focus:outline-none
    text-sm bg-white text-lg my-8"
    />
  );
}
