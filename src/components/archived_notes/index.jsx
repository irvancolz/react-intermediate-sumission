import { useLanguage } from "../../context/language";
import { filterNotes } from "../../utils/hooks";
import { getArchivedNotes } from "../../utils/http";
import { LANGUAGES } from "../../utils/lang";
import NoteList from "../note_list";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ArchivedNotes() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { lang } = useLanguage();
  const [params] = useSearchParams();
  const keyword = params.get("search");

  async function getData() {
    const resp = await filterNotes(getArchivedNotes, keyword);
    setData(() => resp);
  }

  useEffect(() => {
    getData();
    setLoading(() => false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <NoteList
      title={LANGUAGES[lang].notelist.archived}
      loading={loading}
      data={data}
    />
  );
}
