import ActiveNotes from "../../components/active_notes";
import ArchivedNotes from "../../components/archived_notes";

export default function HomePage() {
  return (
    <div>
      <ActiveNotes />
      <ArchivedNotes />
    </div>
  );
}
