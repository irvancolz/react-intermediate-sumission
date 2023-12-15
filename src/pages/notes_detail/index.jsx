import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../components/loading";
import style from "./notes_detail.module.css";
import { getNote } from "../../utils/http";
import { useParams } from "react-router-dom";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { archiveNote, deleteNote, unarchiveNote } from "../../utils/http";
import { useLanguage } from "../../context/language";
import { LANGUAGES } from "../../utils/lang";

export default function NotesDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { lang } = useLanguage();

  const navigate = useNavigate();

  async function deleteCurrentNote() {
    await deleteNote(id);
    navigate(0);
  }

  async function archiveCurrentNote() {
    if (data.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    navigate(0);
  }

  useEffect(() => {
    async function getNotesDetail() {
      const resp = await getNote(id);
      setData(() => resp.data);
    }
    getNotesDetail();
    setLoading(() => false);
  }, []);

  return (
    <div className={style.container}>
      {loading && <Loading />}
      {!data && <p>the data is unavailable</p>}
      {data && !loading && (
        <div>
          <div className={style.tools}>
            <Button variant="secondary" onClick={deleteCurrentNote}>
              {LANGUAGES[lang].button.delete}
            </Button>
            <Button
              variant={data.archived ? "primary" : "secondary"}
              onClick={archiveCurrentNote}
            >
              {data.archived
                ? LANGUAGES[lang].button.unArchived
                : LANGUAGES[lang].button.archived}
            </Button>
          </div>
          <div className={style.content}>
            <h2 className="title">{data.title}</h2>
            <p>{data.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}
