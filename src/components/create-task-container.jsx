import React from 'react';
import AddTaskButton from './add-task-button';
import AddTaskInput from './add-task-input';
import CategoriesButton from './categories-button';

export default function CreateTaskContainer() {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center fixed top-0
      bottom-0 left-0 right-0 bg-zinc-900/70 z-10"
    >
      <div
        className="w-72 flex flex-col items-center border z-20 bg-white rounded
        shadow-lg shadow-zinc-400 relative py-8 justify-between"
      >
        <span>Select a category for your task</span>
        <div className="w-full py-2 flex items-center justify-evenly">
          <CategoriesButton label="Business" id="business" />
          <CategoriesButton label="Personal" id="personal" />
        </div>
        <AddTaskInput />
        <AddTaskButton />
      </div>
    </div>
  );
}
