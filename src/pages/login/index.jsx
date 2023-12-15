import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import style from "./login.module.css";
import { login, putAccessToken } from "../../utils/http";
import { useInputValue } from "../../utils/hooks";
import Input from "../../components/input";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";

export default function LoginPage() {
  const [email, setEmail] = useInputValue();
  const [password, setPassword] = useInputValue();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { lang } = useLanguage();

  async function handleUserLogin(e) {
    e.preventDefault();
    const { data } = await login({ email, password });

    putAccessToken(data.accessToken);
    navigate("/");
  }

  const Icon = showPassword ? <GoEye /> : <GoEyeClosed />;

  return (
    <form onSubmit={handleUserLogin} className={style.container}>
      <Input
        type="text"
        id="login_email_input"
        label={LANGUAGES[lang].form.email}
        value={email}
        onChange={setEmail}
      />

      <div className={style.password_container}>
        <Input
          type={!showPassword ? "password" : "text"}
          id="login_password_input"
          label={LANGUAGES[lang].form.password}
          value={password}
          onChange={setPassword}
        />
        <Button
          type="button"
          className={style.toggle_icon}
          onClick={() => setShowPassword((e) => !e)}
        >
          {Icon}
        </Button>
      </div>
      <Button type="submit">{LANGUAGES[lang].button.login}</Button>
      <p>
        {LANGUAGES[lang].hint.toRegisterPage}
        <Link to={"/register"}>{LANGUAGES[lang].links.register}</Link>
      </p>
    </form>
  );
}
