import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import checkIfUserIsRegistered from '../helpers/check-if-user-is-registered';
import GlobalContext from '../context/global-context';
import defaultMessages from '../data/default-messages';
import checkUserPassword from '../helpers/check-user-password';
import getUserFromLocal from '../services/get-user-from-local';

export default function LoginButton(props) {
  const { isDisabled } = props;
  const {
    email,
    setPassword,
    setEmail,
    setDisplayPopUpMessage,
    setPopUpMessage,
    password,
    setUser,
  } = useContext(GlobalContext);
  const {
    login: { notFound, unauthorized },
  } = defaultMessages;
  const navigate = useNavigate();

  const cleanUp = () => {
    setPassword('');
    setEmail('');
  };

  const handleClick = () => {
    if (!checkIfUserIsRegistered(email)) {
      setPopUpMessage({ ...notFound });
      cleanUp();
      return setDisplayPopUpMessage(true);
    }
    if (!checkUserPassword(email, password)) {
      setPopUpMessage({ ...unauthorized });
      cleanUp();
      return setDisplayPopUpMessage(true);
    }
    cleanUp();
    setUser(getUserFromLocal(email))
    return navigate('/home');
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      className={`relative w-5/12 py-2 group my-2 text-sm
      ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
        absolute inset-0 w-full h-full transition duration-300 ease-out
        ${
          isDisabled ||
          `bg-teal-700 group-hover:-translate-x-0 transform translate-x-1
        translate-y-1 group-hover:-translate-y-0`
        }`}
      />
      <span
        className={`absolute inset-0 w-full h-full  border border-teal-700
      ${isDisabled ? '' : 'bg-white group-hover:bg-teal-700'}
      `}
      />
      <span
        className={`relative text-teal-700
      ${isDisabled ? '' : 'group-hover:text-teal-100'}
      `}
      >
        Login
      </span>
    </button>
  );
}

LoginButton.propTypes = {
  isDisabled: PropTypes.bool,
}.isRequired;
