import { useTheme } from "../../context/theme";
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import Button from "../button";
import style from "./tooltips.module.css";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoLanguageOutline, IoExitOutline } from "react-icons/io5";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";
import { useNavigate } from "react-router-dom";

export default function Tooltips() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLanguage();
  const ThemeIcon = theme == "light" ? <CiLight /> : <BsMoonStars />;
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("accessToken");
    navigate("/login");
  }

  return (
    <li className={style.tooltips}>
      <Button variant="secondary" onClick={() => setPopup((e) => !e)}>
        <CiMenuBurger />
      </Button>
      <div className={style.popup} data-show={popup}>
        <ul>
          <li>
            <Button onClick={toggleTheme}>
              {theme}
              {ThemeIcon}
            </Button>
          </li>
          <li>
            <Button onClick={toggleLang}>
              {lang}
              <IoLanguageOutline />
            </Button>
          </li>
          <li>
            <Button onClick={logout}>
              {LANGUAGES[lang].button.logout}
              <IoExitOutline />
            </Button>
          </li>
        </ul>
      </div>
    </li>
  );
}
