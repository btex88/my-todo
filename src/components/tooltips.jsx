import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function PopUpTips(props) {
  const {
    top, right, message, turnOffCallback,
  } = props;
  const THREE = 3;
  const [timer, setTimer] = useState(THREE);

  useEffect(() => {
    const THOUSAND = 1000;
    const timeout = window.setInterval(() => {
      if (timer > 0) setTimer(timer - 1);
    }, THOUSAND);
    return () => {
      turnOffCallback(null);
      clearInterval(timeout);
  };
  }, [timer]);
  return (
    <div
      className={`max-w-[75%] h-fit px-2 py-1 rounded-lg bg-white/90 border
      border-teal-600 flex items-center justify-center text-xs font-bold text-center
      absolute z-30 top-${top} right-${right}`}
    >
      {message}
    </div>
  );
}

PopUpTips.propTypes = {
  turnOffCallback: PropTypes.func,
  top: PropTypes.number,
  right: PropTypes.number,
  message: PropTypes.string,
}.isRequired;