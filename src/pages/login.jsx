import React, { useContext } from 'react';
import BackgroundScreen from '../components/background-screen';
import LoginContainer from '../components/login-container';
import GlobalContext from '../context/global-context';

function Login() {
  const { bgToggle } = useContext(GlobalContext);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {bgToggle && <BackgroundScreen />}
      <span className="poppins text-2xl mb-16">Welcome to my toDo!</span>
      <LoginContainer />
    </div>
  );
}

export default Login;
