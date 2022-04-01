import React from 'react';
import { MdHome } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import notFound from '../images/not-found.svg';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-screen flex flex-col flex-nowrap items-center justify-start
      mt-24"
    >
      <MdHome
        size="45"
        className="absolute top-4 fill-zinc-600 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <span className="font_quicksand text-3xl sm:text-4xl md:text-5xl text-center mb-12">
        Page not found!
      </span>
      <img src={notFound} alt="not found" />
    </div>
  );
}
