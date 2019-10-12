import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage('toggle', false);

  useEffect(() => {
    const append = document.querySelector('body');
    if (darkMode) {
      append.classList.add('dark-mode');
    } else {
      append.classList.remove('dark-mode');
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
}
export default useDarkMode;
