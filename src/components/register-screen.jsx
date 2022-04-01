import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/global-context';
import RegisterContainer from './register-container';

export default function RegisterScreen() {
  const {
    setName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
  } = useContext(GlobalContext);

  useEffect(() => {
    const clearValues = () => {
      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    };
    clearValues();
    return () => clearValues();
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center fixed top-0
      bottom-0 left-0 right-0 bg-zinc-900/40 z-10"
    >
      <RegisterContainer />
    </div>
  );
}
