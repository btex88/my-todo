import React, { useContext, useEffect, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import AddTaskButton from './add-task-button';
import AddTaskInput from './add-task-input';
import CategoriesButton from './categories-button';
import GlobalContext from '../context/global-context';
import Tooltips from './tooltips'

export default function CreateTaskContainer() {
  const [emptyTaskTip, setEmptyTaskTip] = useState(null)
  const { setDisplayNewTaskContainer, setCurrentTask, setTaskCategory } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentTask('');
    setTaskCategory('');
    return () => {
      setCurrentTask('');
      setTaskCategory('');
    };
  },[]);

  const displayEmptyTaskTip = (type) => {
    if (type === emptyTaskTip) {
      return (
        <Tooltips
          message="Task must not be empty!"
          top="[60%]"
          right="auto"
          turnOffCallback={setEmptyTaskTip}
        />
      );
    }
    return null;
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center fixed top-0
      bottom-0 left-0 right-0 bg-zinc-900/70 z-10"
    >
      {displayEmptyTaskTip('emptyTask')}
      <div
        className="w-72 flex flex-col items-center border z-20 bg-white rounded
        shadow-lg shadow-zinc-400 relative pb-4 pt-8 justify-between"
      >
        <HiOutlinePlus
          className="absolute top-1.5 right-1.5 transform rotate-45 cursor-pointer"
          size="25"
          onClick={() => setDisplayNewTaskContainer(false)}
        />
        <span className="my-1">Select a category for your task</span>
        <div className="w-full py-2 flex items-center justify-evenly">
          <CategoriesButton label="Business" id="business" />
          <CategoriesButton label="Personal" id="personal" />
        </div>
        <AddTaskInput />
        <AddTaskButton displayTip={setEmptyTaskTip} />
      </div>
    </div>
  );
}
