import React, { useContext, useState } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import LoginInput from './login-input';
import validateFullName from '../helpers/validate-full-name';
import validateEmail from '../helpers/validate-email';
import validatePassword from '../helpers/validate-password';
import Tooltips from './tooltips';
import GlobalContext from '../context/global-context';
import RegisterButton from './register-button';

export default function RegisterContainer() {
  const [showPasswordTip, setShowPasswordTip] = useState(null);
  const {
    email,
    name,
    password,
    passwordConfirmation,
    setDisplayRegisterScreen,
    setEmail,
    setName,
    setPassword,
    setPasswordConfirmation,
    displayRegisterScreen,
  } = useContext(GlobalContext);

  const displayPasswordTip = (type) => {
    if (type === showPasswordTip) {
      return (
        <Tooltips
          message="Password must contain letters, numbers and min of 6 characters."
          top="[42%]"
          right="auto"
          turnOffCallback={setShowPasswordTip}
        />
      );
    }
    return null;
  };

  const displayConfirmPasswordTip = (type) => {
    if (type === showPasswordTip) {
      return (
        <Tooltips
          message="Confirm your password."
          top="[62%]"
          right="auto"
          turnOffCallback={setShowPasswordTip}
        />
      );
    }
    return null;
  };

  const values = [
    validateFullName(name),
    validateEmail(email),
    validatePassword(password),
    password === passwordConfirmation,
  ];

  return (
    <div
      className="w-72 h-auto flex flex-col items-center justify-evenly pt-10 pb-4 border
      z-20 bg-white rounded shadow-lg shadow-zinc-700 relative"
    >
      {displayPasswordTip('password')}
      {displayConfirmPasswordTip('password-confirm')}
      <span className="font-medium pb-2">Create your account</span>
      <HiOutlinePlus
        className="absolute top-1.5 right-1.5 transform rotate-45 cursor-pointer"
        size="25"
        onClick={() => setDisplayRegisterScreen(false)}
      />
      <LoginInput
        placeholder="Full Name"
        value={name}
        setValue={setName}
        type="text"
        isValueChecked={validateFullName(name)}
        displayTip
      />
      <LoginInput
        placeholder="email@email.com"
        value={email}
        setValue={setEmail}
        type="email"
        isValueChecked={validateEmail(email)}
        displayTip
      />
      <LoginInput
        placeholder="******"
        value={password}
        setValue={setPassword}
        id="password"
        type="password"
        isValueChecked={validatePassword(password)}
        displayTip={setShowPasswordTip}
      />
      <LoginInput
        placeholder="******"
        value={passwordConfirmation}
        setValue={setPasswordConfirmation}
        id="password-confirm"
        type="password"
        isValueChecked={
          validatePassword(password) && password === passwordConfirmation
        }
        displayTip={setShowPasswordTip}
      />
      <RegisterButton
        isDisabled={values.some((value) => value !== true) && displayRegisterScreen}
      />
    </div>
  );
}
