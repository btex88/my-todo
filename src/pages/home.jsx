import React, { useContext, useEffect, useState } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import CreateTaskButton from '../components/create-task-button';
import CreateTaskContainer from '../components/create-task-container';
import Header from '../components/header';
import TaskContainer from '../components/task-container';
import GlobalContext from '../context/global-context';
import checkIfUserIsRegistered from '../helpers/check-if-user-is-registered';
import getAllUserTasks from '../services/get-all-user-tasks';

function Home() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const {
    displayNewTaskContainer,
    setDisplayNewTaskContainer,
    user,
    setAllTasks,
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (checkIfUserIsRegistered(user.email)) return setIsUserRegistered(true);
    return setIsUserRegistered(false);
  }, []);

  useEffect(() => {
    setDisplayNewTaskContainer(false);
    setAllTasks(getAllUserTasks(user.email));
    return () => setDisplayNewTaskContainer(false);
  }, []);

  return isUserRegistered ? (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <Header />
      {displayNewTaskContainer && <CreateTaskContainer />}
      <TaskContainer />
      <CreateTaskButton />
    </div>
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <IoMdArrowRoundBack
        size="30"
        className="absolute top-10 right-auto fill-zinc-600"
        onClick={() => navigate('/')}
      />
      <span className="w-[80%] break-words text-center text-3xl">
        You must login first to access the app!
      </span>
    </div>
  );
}

export default Home;
