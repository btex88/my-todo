import React, { useContext } from 'react';
import GlobalContext from '../context/global-context';

function BackgroundScreen() {
  const { setBgToggle } = useContext(GlobalContext);
  return (
    <button
      type="button"
      className="w-full h-full bg-zinc-900/40 z-10 fixed top-0 left-0"
      aria-label="translucent background"
      onClick={() => setBgToggle(false)}
    />
  );
}

export default BackgroundScreen;
