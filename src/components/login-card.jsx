import React from 'react';
import LoginButton from './login-button';
import LoginInput from './login-input';

export default function LoginCard() {
  return (
    <div
      className="w-64 py-4 rounded shadow-2xl shadow-zinc-500 flex flex-col items-center"
    >
      <span>Welcome to my toDo!</span>
      <LoginInput placeholder="email@email.com" type="email" />
      <LoginInput placeholder="******" type="password" />
      <LoginButton label="Login" />
      <LoginButton label="Register" />
    </div>
  );
}
