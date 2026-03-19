import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { AlertProvider } from "./contexts/alertContext/AlertProvider.tsx";
import { AuthProvider, useAuth } from "./contexts/authContext/AuthProvider.tsx";
import "./css/style.css";
import About from "./public/About.tsx";
import CharacterSheet from "./public/CharacterSheet.tsx";
import ForgotPassword from "./public/ForgotPassword.tsx";
import Home from "./public/Home.tsx";
import Login from "./public/Login.tsx";
import Signup from "./public/Signup.tsx";
import ChangeUsername from "./user/ChangeUsername.tsx";
import CreateCharacter from "./user/CreateCharacter.tsx";
import ViewCharacters from "./user/ViewCharacters.tsx";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AlertProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<ForgotPassword />} />

            <Route path="/character/:id" element={<CharacterSheet />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/change-username" element={<ChangeUsername />} />
              <Route path="/create" element={<CreateCharacter />} />
              <Route path="/view" element={<ViewCharacters />} />
            </Route>
          </Routes>
        </AlertProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
