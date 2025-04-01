import React, { useEffect, useState } from 'react';

const FloatingThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Mode"
      className="fixed top-2.5 right-2.5 p-1.5 text-[15px] z-[1000] cursor-pointer shadow-[2px_4px_6px_rgba(1.5,1.5,1.5,2)] transition-transform duration-300 hover:scale-100 hover:text-orange-400 hover:rounded-[30px] hover:font-bold hover:outline hover:outline-2 hover:outline-[#646cff]"
    >
      <div className="flex flex-col items-center">
        <p>{theme === 'light' ? '🌚' : '🌕️'}</p>
        <p className="vertical-rotated-text text-sm text-white">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>
    </button>
  );
};

export default FloatingThemeToggleButton;
