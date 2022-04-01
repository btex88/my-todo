import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import validateEmail from '../helpers/validate-email';
import validatePassword from '../helpers/validate-password';
import LoginButton from './login-button';
import LoginInput from './login-input';
import RegisterButton from './register-button';

export default function LoginContainer() {
  const { email, setEmail, password, setPassword } = useContext(GlobalContext);

  return (
    <div className="w-64 py-4 shadow-2xl shadow-zinc-500 flex flex-col items-center">
      <span>Login / Register</span>
      <div className="w-full flex flex-col items-center py-2">
        <LoginInput
          placeholder="email@email.com"
          type="email"
          setValue={setEmail}
          value={email}
          isValueChecked={validateEmail(email)}
        />
        <LoginInput
          placeholder="******"
          type="password"
          setValue={setPassword}
          value={password}
          isValueChecked={validatePassword(password)}
        />
      </div>
      <div className="w-full flex flex-col items-center py-2">
        <LoginButton
          label="Login"
          isDisabled={!validateEmail(email) || !validatePassword(password)}
        />
        <RegisterButton />
      </div>
    </div>
  );
}
