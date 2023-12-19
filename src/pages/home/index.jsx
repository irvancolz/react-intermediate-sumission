import ActiveNotes from "../../components/active_notes";
import ArchivedNotes from "../../components/archived_notes";
import Searchbar from "../../components/search";

export default function HomePage() {
  return (
    <div>
      <Searchbar />
      <ActiveNotes />
      <ArchivedNotes />
    </div>
  );
}
