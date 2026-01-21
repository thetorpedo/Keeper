import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './public/Home.jsx';
import About from './public/About.jsx';
import Navbar from '../components/ui/navbar.jsx';
import './css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
