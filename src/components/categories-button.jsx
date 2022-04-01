import React, { useContext } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import GlobalContext from '../context/global-context';

export default function CategoriesButton(props) {
  const { label, id } = props;
  const { setTaskCategory, taskCategory } = useContext(GlobalContext);

  const checkCategory = () => {
    if (id === 'business' && id === taskCategory) return 'bg-blue-800';
    if (id === 'personal' && id === taskCategory) return 'bg-pink-800';
    return 'bg-zinc-300';
  };

  const handleClick = (targetId) => {
    if (targetId === taskCategory) return setTaskCategory('')
    return setTaskCategory(targetId)
  }

  return (
    <button
      id={_.toLower(label)}
      type="button"
      onClick={({ target }) => handleClick(target.id)}
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
