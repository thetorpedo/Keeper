import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangeUsername from "./authorized/ChangeUsername.tsx";
import { AuthProvider } from "./contexts/authContext/authProvider.tsx";
import './css/style.css';
import About from './public/About.tsx';
import ForgotPassword from "./public/ForgotPassword.tsx";
import Home from './public/Home.tsx';
import Login from './public/Login.tsx';
import Signup from './public/Signup.tsx';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ForgotPassword />} />
        <Route path="/change-username" element={<ChangeUsername />} />
      </Routes></AuthProvider>
    </BrowserRouter>
  );
}

export default App;
