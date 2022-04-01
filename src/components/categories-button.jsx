import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function CategoriesButton(props) {
  const { label, id } = props;
  const { taskCategory, setTaksCategory } = useContext(GlobalContext);

  const checkCategory = () => {
    if (taskCategory === id) return 'bg-blue-800'
    if (taskCategory === id) return 'bg-pink-800'
    return 'bg-zinc-300'
  }
  return (
    <button
      id={id}
      type="button"
      onClick={({target}) => setTaksCategory(target.id)}
      className={`px-4 py-3 group my-2 text-xs text-white rounded-full font-bold
      ${checkCategory()}`}
    >
      {label}
    </button>
  );
}

CategoriesButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
}.isRequired;
