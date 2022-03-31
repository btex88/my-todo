import React from 'react';
import PropTypes from 'prop-types';

export default function LoginInput(props) {
  const {type, placeholder, setValue, value} = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({target}) => setValue(target.value)}
      className="w-10/12 px-4 py-2 text-base border-b border-zinc-400 text-center my-2
      focus:outline-none focus:border-teal-500 text-sm"
    />
  );
}

LoginInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
}.isRequired;
