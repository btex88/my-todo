import React, { useContext } from 'react';
import { HiPlus } from 'react-icons/hi';
import GlobalContext from '../context/global-context';

export default function CreateTaskButton() {
  const { setDisplayNewTaskContainer } = useContext(GlobalContext);

  const handleClick = () => setDisplayNewTaskContainer(true);

  return (
    <HiPlus
      className="h-14 w-14 p-2.5 fixed bottom-6 right-6 cursor-pointer text-sm
      bg-teal-700 rounded-full fill-white"
      onClick={handleClick}
    />
  );
}
