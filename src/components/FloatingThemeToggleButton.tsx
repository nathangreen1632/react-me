import { useEffect, useState } from 'react';

const FloatingThemeToggleButton = () => {
  const getInitialTheme = (): 'light' | 'dark' | 'system' => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
      return storedTheme;
    }
    return 'system'; // Default to system
  };

  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(getInitialTheme);

  // Handles applying the theme correctly
  const applyTheme = (currentTheme: string) => {
    if (currentTheme === 'system') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', isSystemDark);
    } else {
      document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemThemeChangeHandler = () => {
        applyTheme('system');
      };
      mediaQuery.addEventListener('change', systemThemeChangeHandler);

      return () => {
        mediaQuery.removeEventListener('change', systemThemeChangeHandler);
      };
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'
    );
  };

  const renderIcon = () => {
    if (theme === 'light') return '🌚';
    if (theme === 'dark') return '🖥️';
    return '🌕️';
  };

  const renderLabel = () => {
    if (theme === 'light') return 'Dark Mode';
    if (theme === 'dark') return 'System Mode';
    return 'Light Mode';
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark/System Mode"
      className="fixed top-2.5 right-2.5 p-1.5 text-[15px] z-[1000] cursor-pointer shadow-[2px_4px_6px_rgba(1.5,1.5,1.5,2)] transition-transform duration-300 hover:scale-100 hover:text-orange-400 hover:rounded-[30px] hover:font-bold hover:outline hover:outline-2 hover:outline-[#646cff] hover:dark:outline-orange-400"
    >
      <div className="flex flex-col items-center">
        <p>{renderIcon()}</p>
        <p className="vertical-rotated-text text-sm text-white">
          {renderLabel()}
        </p>
      </div>
    </button>
  );
};

export default FloatingThemeToggleButton;
