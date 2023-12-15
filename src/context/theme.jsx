import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  function saveTheme(theme) {
    setTheme(() => theme);
    localStorage.setItem("theme", theme);
  }

  function toggleTheme() {
    if (theme == "dark") {
      saveTheme("light");
      return;
    }
    saveTheme("dark");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
