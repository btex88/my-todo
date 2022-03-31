import React from 'react';
import PropTypes from 'prop-types';

export default function LoginButton(props) {
  const { label } = props;
  return (
    <button type="button" className="relative px-6 py-2 group my-3 text-sm">
      <span
        className="absolute inset-0 w-full h-full transition duration-300 ease-out
        transform translate-x-1 translate-y-1 bg-teal-500 group-hover:-translate-x-0
        group-hover:-translate-y-0"
      />
      <span
        className="absolute inset-0 w-full h-full bg-white border border-teal-500
      group-hover:bg-teal-500"
      />
      <span className="relative text-teal-500 group-hover:text-teal-100">
        {label}
      </span>
    </button>
  );
}

LoginButton.propTypes = {
  label: PropTypes.string,
}.isRequired;
