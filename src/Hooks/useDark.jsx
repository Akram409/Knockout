import { useState, useEffect } from "react";

const useDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const preferredMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(preferredMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDark;
