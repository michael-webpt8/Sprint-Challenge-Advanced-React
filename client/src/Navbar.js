import React from 'react';
import useDarkMode from './Hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
};
