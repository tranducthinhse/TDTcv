import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize state with dark mode being the default theme
  const [darkMode, setDarkMode] = useState(true);

  // Set the theme on the <html> element whenever darkMode changes
  useEffect(() => {
    // If darkMode is true, set the theme to 'dark'
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev); // Toggle the dark mode state
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
