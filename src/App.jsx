import { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getAccessToken } from "./utils/http";
import Heading from "./components/heading";
import { useTheme } from "./context/theme";

const HomePage = lazy(() => import("./pages/home"));
const LoginPage = lazy(() => import("./pages/login"));
const RegistrationPagge = lazy(() => import("./pages/register"));
const NotFoundPage = lazy(() => import("./pages/not_found"));
const AddNotesPage = lazy(() => import("./pages/add_notes"));
const NotesDetailPage = lazy(() => import("./pages/notes_detail"));

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { theme } = useTheme();

  const token = getAccessToken();

  useEffect(() => {
    if (!token && pathname != "/register") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="main" data-theme={theme}>
      <Heading />
      <main>
        <Suspense>
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/notes/add"} element={<AddNotesPage />} />
            <Route path={"/notes/:id"} element={<NotesDetailPage />} />
            <Route path={"/login"} element={<LoginPage />} />
            <Route path={"/register"} element={<RegistrationPagge />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
