import React from 'react';
import PropTypes from 'prop-types';
import { RiCheckboxCircleLine } from 'react-icons/ri';

export default function LoginInput(props) {
  const { value, setValue, placeholder, type, isValueChecked, displayTip, id } =
    props;
  return (
    <div className="w-full h-auto flex items-center justify-center relative">
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onFocus={({ target }) =>
          typeof displayTip === 'function' && displayTip(target.id)
        }
        onBlur={() => typeof displayTip === 'function' && displayTip(null)}
        onChange={({ target }) => setValue(target.value)}
        className="w-10/12 px-4 py-2 text-base border-b border-zinc-400 text-center my-2
      focus:outline-none focus:border-teal-700 text-sm bg-white"
      />
      <RiCheckboxCircleLine
        className={`absolute top-4.5 right-8
        ${isValueChecked ? 'fill-teal-700' : 'fill-stone-900 opacity-50'}`}
      />
    </div>
  );
}

LoginInput.propTypes = {
  displayTip: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
