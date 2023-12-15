import { useLanguage } from "../../context/language";
import { getActiveNotes } from "../../utils/http";
import { LANGUAGES } from "../../utils/lang";
import NoteList from "../note_list";
import { useEffect, useState } from "react";

export default function ActiveNotes() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { lang } = useLanguage();

  async function getData() {
    const resp = await getActiveNotes();
    setData(() => resp.data);
    setLoading(() => false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <NoteList
      title={LANGUAGES[lang].notelist.unArchived}
      loading={loading}
      data={data}
    />
  );
}
