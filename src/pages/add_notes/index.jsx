import { useInputValue } from "../../utils/hooks";
import Input from "../../components/input";
import Button from "../../components/button";
import style from "./add_notes.module.css";
import { addNote } from "../../utils/http";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";

export default function AddNotesPage() {
  const [title, setTitle] = useInputValue();
  const [body, setBody] = useInputValue();
  const navigate = useNavigate();

  const { lang } = useLanguage();
  function addNotesToDb(e) {
    e.preventDefault();
    addNote({ body, title });
    navigate("/");
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>{LANGUAGES[lang].hint.addNotePage}</h2>

      <form onSubmit={addNotesToDb}>
        <Input
          label={LANGUAGES[lang].form.title}
          onChange={setTitle}
          type="text"
          value={title}
          id="add_notes_title_input"
        />
        <Input
          label={LANGUAGES[lang].form.desc}
          onChange={setBody}
          type="text"
          value={body}
          id="add_notes_desc_input"
        />
        <Button>{LANGUAGES[lang].button.addnotes}</Button>
      </form>
    </div>
  );
}
