import style from "./heading.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserLogged, getAccessToken } from "../../utils/http";
import Tooltips from "../tooltips";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";

export default function Heading() {
  const [username, setUsername] = useState("guest");

  const { lang } = useLanguage();

  async function getCurrentUser() {
    const req = await getUserLogged();
    setUsername(() => req.data.name);
  }

  const token = getAccessToken();
  useEffect(() => {
    if (token) {
      getCurrentUser();
    }
  }, []);

  return (
    <header className={style.container}>
      <h1 className={style.title}>{LANGUAGES[lang].hint.appName}</h1>
      <nav>
        <ul className={style.nav}>
          {token && (
            <>
              <li className={style.link}>
                <Link to={"/"}>{LANGUAGES[lang].links.home}</Link>
              </li>

              <li className={style.link}>
                <Link to={"/notes/add"}>{LANGUAGES[lang].links.add}</Link>
              </li>
            </>
          )}

          <li className={style.link} title={username}>
            {username}
          </li>
          <Tooltips />
        </ul>
      </nav>
    </header>
  );
}
