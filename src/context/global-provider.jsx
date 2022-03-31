import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from './global-context';

export default function GlobalProvider({ children }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [bgToggle, setBgToggle] = useState(false);
  const [user, setUser] = useState(null);

  const memoObj = {
    user,
    setUser,
    bgToggle,
    setBgToggle,
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
  };

  const memo = useMemo(() => memoObj, [memoObj]);

  return (
    <GlobalContext.Provider value={memo}>{children}</GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;
