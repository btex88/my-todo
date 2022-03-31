import React from 'react';
import PropTypes from 'prop-types';

export default function LoginButton(props) {
  const { isDisabled } = props;
  return (
    <button
      type="button"
      disabled={isDisabled}
      className={`relative w-5/12 py-2 group my-2 text-sm
      ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      <span
        className={`
        absolute inset-0 w-full h-full transition duration-300 ease-out
        ${isDisabled || `bg-teal-500 group-hover:-translate-x-0 transform translate-x-1
        translate-y-1 group-hover:-translate-y-0`}
      }
        `}
      />
      <span
        className={`absolute inset-0 w-full h-full  border border-teal-500
      ${isDisabled ? '' : 'bg-white group-hover:bg-teal-500'}
      `}
      />
      <span className={`relative text-teal-500
      ${isDisabled ? '' : 'group-hover:text-teal-100'}
      `}>
        Login
      </span>
    </button>
  );
}

LoginButton.propTypes = {
  isDisabled: PropTypes.bool,
}.isRequired;
