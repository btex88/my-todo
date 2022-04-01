import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function PopUpMessage() {
  const FOUR = 4;
  const [timer, setTimer] = useState(FOUR);
  const {
    setDisplayRegisterScreen,
    setDisplayPopUpMessage,
    popUpMessage,
    setPopUpMessage,
  } = useContext(GlobalContext);
  const { title, message } = popUpMessage;

  useEffect(() => () => setPopUpMessage({ title: '', message: '' }), []);

  useEffect(() => {
    const THOUSAND = 1000;
    const timeout = setTimeout(() => {
      if (timer > 0) setTimer(timer - 1);
      else {
        setDisplayRegisterScreen(false);
        setDisplayPopUpMessage(false);
      }
    }, THOUSAND);
    return () => {
      clearTimeout(timeout);
    };
  }, [timer]);

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center fixed top-0
      bottom-0 left-0 right-0 bg-zinc-900/70 z-10"
    >
      <div
        className="w-72 h-auto flex flex-col items-center justify-evenly pt-10 pb-4 border
        z-20 bg-zinc-200 rounded shadow-lg shadow-zinc-400 relative"
      >
        <span
          className="w-9/12 h-auto text-lg font-semibold tracking-wide break-words
          text-center pb-4"
        >
          {title}
        </span>
        <span className="w-11/12 h-auto text-sm font-base break-words text-center pb-4">
          {message}
        </span>
        <span>{timer}</span>
      </div>
    </div>
  );
}

PopUpMessage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
}.isRequired;
