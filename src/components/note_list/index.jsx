import PropTypes from "prop-types";
import Loading from "../loading";
import NoteItem from "../note_item";
import style from "./notelist.module.css";

export default function NoteList({ title, loading = true, data = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className={style.notes_container}>
        {loading && <Loading />}
        {data.length > 0
          ? data.map((item, i) => {
              return <NoteItem key={i} {...item} />;
            })
          : !loading && <p>no data to show</p>}
      </div>
    </div>
  );
}

NoteList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};
