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
    setUser(getUserFromLocal(email));
    return navigate('/home');
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      onClick={handleClick}
      className={`w-24 py-3 group my-2 text-sm bg-white text-teal-700 poppins border
      border-teal-700 rounded-full
      ${isDisabled
        ? 'opacity-50 cursor-not-allowed'
        : 'hover:bg-teal-700 hover:text-white'}`}
    >
      Login
    </button>
  );
}

LoginButton.propTypes = {
  isDisabled: PropTypes.bool,
}.isRequired;
