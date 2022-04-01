import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './global-context';

export default function GlobalProvider({ children }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');
  const [displayRegisterScreen, setDisplayRegisterScreen] = useState(false);
  const [user, setUser] = useState({
    name: 'Bruno Teixeira',
    email: 'btex88@gmail.com',
  });
  const [showPasswordTip, setShowPasswordTip] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState({ title: '', message: '' });
  const [displayPopUpMessage, setDisplayPopUpMessage] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [taskCategory, setTaksCategory] = useState('');
  const [currentTask, setCurrentTask] = useState('');

  const memoObj = {
    user,
    setUser,
    displayRegisterScreen,
    setDisplayRegisterScreen,
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    showPasswordTip,
    setShowPasswordTip,
    passwordConfirmation,
    setPasswordConfirmation,
    popUpMessage,
    setPopUpMessage,
    displayPopUpMessage,
    setDisplayPopUpMessage,
    allTasks,
    setAllTasks,
    taskCategory,
    setTaksCategory,
    currentTask,
    setCurrentTask,
  };

  const memo = useMemo(() => memoObj, [memoObj]);

  return (
    <GlobalContext.Provider value={memo}>{children}</GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
