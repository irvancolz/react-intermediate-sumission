import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { register } from "../../utils/http";
import { useInputValue } from "../../utils/hooks";
import Input from "../../components/input";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";

export default function RegistrationPage() {
  const [name, setUsername] = useInputValue();
  const [email, setEmail] = useInputValue();
  const [password, setPassword] = useInputValue();
  const [confirmPass, setConfirmPass] = useInputValue();
  const navigate = useNavigate();
  const { lang } = useLanguage();

  async function handleUserLogin(e) {
    e.preventDefault();

    if (password != confirmPass) {
      alert("password tidak sama");
      return;
    }

    await register({ email, password, name });

    navigate("/login");
  }

  return (
    <form onSubmit={handleUserLogin} style={{ marginTop: "1rem" }}>
      <Input
        label={LANGUAGES[lang].form.username}
        id={"register_username_input"}
        type="text"
        value={name}
        onChange={setUsername}
      />

      <Input
        label={LANGUAGES[lang].form.email}
        id={"register_email_input"}
        type="text"
        value={email}
        onChange={setEmail}
      />

      <Input
        label={LANGUAGES[lang].form.password}
        id={"register_password_input"}
        type="password"
        value={password}
        onChange={setPassword}
      />

      <Input
        label={LANGUAGES[lang].form.confirmPassword}
        id={"confirm_password_input"}
        type="password"
        value={confirmPass}
        onChange={setConfirmPass}
      />

      <Button type="submit">{LANGUAGES[lang].button.register}</Button>
      <p>
        {LANGUAGES[lang].hint.toLoginPage}
        <Link to={"/login"}>{LANGUAGES[lang].links.login} </Link>
      </p>
    </form>
  );
}
