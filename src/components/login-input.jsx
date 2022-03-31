import React from 'react';
import PropTypes from 'prop-types';

export default function LoginInput(props) {
  const {type, placeholder, setValue} = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      onClick={setValue}
      className="w-10/12 px-4 py-2 text-base border-b border-zinc-400 text-center mt-2
      focus:outline-none focus:border-teal-500 text-sm"
    />
  );
}

/*
	  const categoriesDrinks = useSelector((state) => state.categoriesDrinks); // mapStateToProps
  const dispatch = useDispatch(); // mapDispatchToProps
*/

LoginInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
}.isRequired;
