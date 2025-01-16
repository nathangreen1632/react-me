import React, { useEffect, useState } from 'react';
import '../css/FloatingThemeToggleButton.css';

const FloatingThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className="floating-theme-toggle-button"
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Mode"
    >
      {theme === 'light' ? '🌚' : '🌕️'}
    </button>
  );
};

export default FloatingThemeToggleButton;
