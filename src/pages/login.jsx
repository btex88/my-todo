import React, { useContext } from 'react';
import RegisterScreen from '../components/register-screen';
import LoginContainer from '../components/login-container';
import GlobalContext from '../context/global-context';
import PopUpMessage from '../components/pop-up-message';

function Login() {
  const { displayRegisterScreen, displayPopUpMessage } = useContext(GlobalContext);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {displayRegisterScreen && <RegisterScreen />}
      {displayPopUpMessage && <PopUpMessage />}
      <span className="poppins text-2xl mb-16">Welcome to my toDo!</span>
      <LoginContainer />
    </div>
  );
}

export default Login;
