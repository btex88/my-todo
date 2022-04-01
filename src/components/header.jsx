import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import _ from 'lodash';
import GlobalContext from '../context/global-context';
import getDate from '../helpers/get-date';

export default function Header() {
  const { user, setUser, setAllTasks } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setAllTasks([])
    setUser({ name: '', email: '' });
    navigate('/');
  }

  return (
    <div className="w-full flex flex-col py-4 items-center">
      <div className="w-[90%] flex items-center justify-between">
        <span>{getDate()}</span>
        <MdLogout
          size="25"
          onClick={handleClick}
        />
      </div>
      <span className="w-[90%] text-2xl font-medium w-full text-left pt-8">
        {`What's up, ${_.capitalize(user.name.split(' ')[0])}!`}
      </span>
    </div>
  );
}
