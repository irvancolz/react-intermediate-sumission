import { useLanguage } from "../../context/language";
import { getArchivedNotes } from "../../utils/http";
import { LANGUAGES } from "../../utils/lang";
import NoteList from "../note_list";
import { useEffect, useState } from "react";

export default function ArchivedNotes() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { lang } = useLanguage();

  async function getData() {
    const resp = await getArchivedNotes();
    setData(() => resp.data);
    setLoading(() => false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <NoteList
      title={LANGUAGES[lang].notelist.archived}
      loading={loading}
      data={data}
    />
  );
}
