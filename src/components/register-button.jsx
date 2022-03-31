import React, { useContext } from 'react';
import { v4 as UUIDv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import GlobalContext from '../context/global-context';

export default function RegisterButton() {
  const { bgToggle, setBgToggle, email, password, name } =
    useContext(GlobalContext);

  const handleClick = () => {
    if (!bgToggle) return setBgToggle(true);
    const uuid = new UUIDv4();
    const encryptPassword = CryptoJS.AES.encrypt(password, uuid);
    const newUser = {
      name,
      email,
      password: encryptPassword,
      uuid,
    };
    setUser(newUser);
    setBgToggle(false);
  };

  return (
    <button
      type="button"
      className="relative w-5/12 py-2 group my-2 text-sm"
      onClick={handleClick}
    >
      <span
        className=" absolute inset-0 w-full h-full transition duration-300 ease-out
        bg-teal-500 group-hover:-translate-x-0 transform translate-x-1 translate-y-1
        group-hover:-translate-y-0"
      />
      <span
        className="absolute inset-0 w-full h-full  border border-teal-500 bg-white
        group-hover:bg-teal-500"
      />
      <span className="relative text-teal-500 group-hover:text-teal-100">
        Register
      </span>
    </button>
  );
}
