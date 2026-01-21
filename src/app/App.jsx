import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './public/Home.jsx';
import About from './public/About.jsx';
import Login from './public/Login.jsx';
import Signup from './public/Signup.jsx';
import './css/style.css';

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
