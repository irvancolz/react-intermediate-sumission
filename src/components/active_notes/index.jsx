import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../../context/language";
import { getActiveNotes } from "../../utils/http";
import { LANGUAGES } from "../../utils/lang";
import NoteList from "../note_list";
import { useEffect, useState } from "react";
import { filterNotes } from "../../utils/hooks";

export default function ActiveNotes() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { lang } = useLanguage();
  const [params] = useSearchParams();
  const keyword = params.get("search");

  async function getData() {
    const resp = await filterNotes(getActiveNotes, keyword);
    setData(() => resp);
  }

  useEffect(() => {
    getData();
    setLoading(() => false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <NoteList
      title={LANGUAGES[lang].notelist.unArchived}
      loading={loading}
      data={data}
    />
  );
}
