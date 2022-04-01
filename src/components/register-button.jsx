import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import CryptoJS from 'crypto-js';
import GlobalContext from '../context/global-context';
import checkIfUserIsRegistered from '../helpers/check-if-user-is-registered';
import regiterUserToLocal from '../services/register-user-to-local';
import defaultMessages from '../data/default-messages';

export default function RegisterButton(props) {
  const { isDisabled } = props;
  const {
    register: { conflict, success },
  } = defaultMessages;
  const {
    displayRegisterScreen,
    setDisplayRegisterScreen,
    email,
    password,
    name,
    setPassword,
    setPasswordConfirmation,
    setPopUpMessage,
    setDisplayPopUpMessage,
  } = useContext(GlobalContext);

  const cleanUp = () => {
    setPassword('');
    setPasswordConfirmation('');
  };

  const handleClick = () => {
    if (!displayRegisterScreen) return setDisplayRegisterScreen(true);
    if (!checkIfUserIsRegistered(email)) {
      const uuid = v4();
      const encryptPassword = CryptoJS.AES.encrypt(password, uuid).toString();
      const user = {
        name,
        email,
        password: encryptPassword,
        uuid,
      };
      regiterUserToLocal(user);
      setPopUpMessage({ ...success });
    } else setPopUpMessage({ ...conflict });
    cleanUp();
    setDisplayPopUpMessage(true);
    return setDisplayRegisterScreen(false);
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
        Register
      </span>
    </button>
  );
}

RegisterButton.propTypes = {
  isDisabled: PropTypes.bool,
}.isRequired;
