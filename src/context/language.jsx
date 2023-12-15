import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export function useLanguage() {
  return useContext(LanguageContext);
}

export default function LanguageContextProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem("language") || "ENG");

  function saveLanguage(lang) {
    setLang(() => lang);
    localStorage.setItem("language", lang);
  }

  function toggleLang() {
    if (lang == "ID") {
      saveLanguage("ENG");
      return;
    }
    saveLanguage("ID");
  }

  return (
    <LanguageContext.Provider
      value={{
        lang,
        toggleLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
