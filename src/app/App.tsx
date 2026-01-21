import { BrowserRouter, Route, Routes } from "react-router-dom";
import './css/style.css';
import About from './public/About.tsx';
import Home from './public/Home.tsx';
import Login from './public/Login.tsx';
import Signup from './public/Signup.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
