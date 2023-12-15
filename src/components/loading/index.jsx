import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";
import style from "./loading.module.css";

export default function Loading() {
  const { lang } = useLanguage();
  return (
    <div>
      <p>{LANGUAGES[lang].hint.loading}</p>
      <div className={style.loader}></div>
    </div>
  );
}
