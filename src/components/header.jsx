import _ from 'lodash';
import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';
import getDate from '../helpers/get-date';

export default function Header() {
  const { user } = useContext(GlobalContext);
  return (
    <div className="w-full flex flex-col py-2 items-center">
      <span className="py-2">{getDate()}</span>
      <span className="text-2xl font-medium w-full text-left">
        {`Whats's up, ${_.capitalize(user.name.split(' ')[0])}!`}
      </span>
    </div>
  );
}
