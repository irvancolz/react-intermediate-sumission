import Button from "../button";
import Input from "../input";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";
import { useInputValue } from "../../utils/hooks";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import style from "./search.module.css";

export default function Searchbar() {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [value, setValue] = useInputValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/home?search=${value}`);
      return;
    }
    navigate(`/home`);
  };

  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <Input
        type="text"
        label={LANGUAGES[lang].button.search}
        onChange={setValue}
        value={value}
      />
      <Button>
        <IoSearchOutline />
        {LANGUAGES[lang].button.search}
      </Button>
    </form>
  );
}
