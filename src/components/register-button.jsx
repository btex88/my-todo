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
      className={`w-24 py-3 group my-2 text-sm bg-white text-teal-700 poppins border
      border-teal-700 rounded-full
      ${
        isDisabled
          ? 'opacity-50 cursor-not-allowed'
          : 'hover:bg-teal-700 hover:text-white'
      }`}
    >
      Register
    </button>
  );
}

RegisterButton.propTypes = {
  isDisabled: PropTypes.bool,
}.isRequired;
