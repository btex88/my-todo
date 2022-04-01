import _ from 'lodash';
import React, { useContext } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { MdRemoveCircleOutline } from 'react-icons/md';
import GlobalContext from '../context/global-context';
import randomIdGenerator from '../helpers/random-id-generator';
import deleteTask from '../services/delete-task';
import finishTask from '../services/finish-task';

export default function TaskContainer() {
  const { allTasks, user, setAllTasks } = useContext(GlobalContext);

  const checkCategory = (id, checked) => {
    if (id === 'business' && !checked) return 'fill-blue-800';
    if (id === 'personal' && !checked) return 'fill-pink-800';
    if (!checked) return 'fill-zinc-600';
    return 'fill-zinc-300';
  };

  const handleClick = (taskId) => {
    const modifiedTaskList = finishTask(user.email, taskId);
    setAllTasks(modifiedTaskList);
  };

  const handleDeleteTask = (taskId) =>
    setAllTasks(deleteTask(user.email, taskId));

  const handleEmptyTaskList = () => (
    <span className="mt-10">You have no task registered yet!</span>
  );

  return (
    <div className="w-[90%] py-4 flex flex-col items-center">
      {_.isEmpty(allTasks)
        ? handleEmptyTaskList()
        : allTasks.map((value) => (
            <div
              className="w-full flex flex-nowrap items-center justify-between"
              key={randomIdGenerator()}
            >
              <button
                className="flex flex-nowrap items-center justify-start my-2"
                type="button"
                onClick={() => handleClick(value.id)}
              >
                <FaRegCircle
                  size="22"
                  className={`${checkCategory(value.category, value.checked)}`}
                />
                <span
                  className={`ml-2 w-full text-left
                  ${value.checked ? 'line-through text-zinc-300' : ''}`}
                >
                  {value.task}
                </span>
              </button>
              <MdRemoveCircleOutline
                size="22"
                className={`min-w-max ${
                  value.checked
                    ? 'fill-red-500'
                    : 'fill-zinc-300 cursor-not-allowed'
                }`}
                onClick={() =>
                  value.checked ? handleDeleteTask(value.id) : null
                }
              />
            </div>
          ))}
    </div>
  );
}
