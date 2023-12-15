import Button from "../button";
import PropTypes from "prop-types";
import style from "./note_item.module.css";
import { Link, useNavigate } from "react-router-dom";
import { archiveNote, deleteNote, unarchiveNote } from "../../utils/http";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";

export default function NoteItem({ id, title, body, archived }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();

  async function deleteCurrentNote() {
    await deleteNote(id);
    navigate(0);
  }

  async function archiveCurrentNote() {
    if (archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    navigate(0);
  }

  return (
    <div className={style.container}>
      <Link to={`/notes/${id}`}>
        <h3 className={` ${style.overflow_handler} ${style.title}`}>{title}</h3>
      </Link>
      <p className={`${style.overflow_handler} ${style.body}`}>{body}</p>
      <div className={style.tools}>
        <Button variant="secondary" onClick={deleteCurrentNote}>
          {LANGUAGES[lang].button.delete}
        </Button>
        <Button
          variant={archived ? "primary" : "secondary"}
          onClick={archiveCurrentNote}
        >
          {archived
            ? LANGUAGES[lang].button.unArchived
            : LANGUAGES[lang].button.archived}
        </Button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};
