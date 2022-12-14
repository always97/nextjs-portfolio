import React from 'react';
import { useTheme } from 'next-themes'


const DarkModeButton = () => {

  const { theme, setTheme } = useTheme();

  function modeChange() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      {
        theme === 'dark' ? 
            <button 
            className="inline-flex items-center 
              bg-gray-100 border-0 py-1 px-3 bg-slate-600 text-slate-400
              focus:outline-none 
              hover:bg-gray-200
              hover:bg-slate-700
              hover:text-yellow-500
              "
            type='button'
            onClick={()=> modeChange()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="dark w-10 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          </button>
        :
            <button 
            className="inline-flex items-center 
              bg-gray-100 border-0 py-1 px-3 
              focus:outline-none 
              hover:bg-gray-200
              hover:text-orange-500
              "
            type='button'
            onClick={()=> modeChange()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="light w-10 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
          </button>
      }


      

    </>
  );
};

export default DarkModeButton;